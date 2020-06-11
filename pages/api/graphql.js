import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

const typeDefs = gql`

  type Question {
    questionTitle: String!
    answers: [Answer]!
  }

  type Answer {
    description: String!,
    isCorrect: Boolean!
  }

  type Questionnaire {
    id: ID!,
    questionnaireTitle: String!,
    questions: [Question]!
  }

  type Query {
    questionnaires: Questionnaire
  }
`

const resolvers = {
  Query: {
    questionnaires(_parent, _args, _context, _info) {
      return _context.db
        .collection('questionnaires')
        .findOne()
        .then((data) => {
          console.log(JSON.stringify(data))
          return data
        })
    }
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(
          `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@cluster0-gwwwi.mongodb.net/test?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('test') // database name
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e)
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })