import mongoose from 'mongoose';

const connection = {};

const dbUrl = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@cluster0-gwwwi.mongodb.net/test?retryWrites=true&w=majority`

async function dbConnect() {
  if(connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected)
}

export default dbConnect;