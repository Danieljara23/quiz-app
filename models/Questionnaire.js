const mongoose = require('mongoose');

// const AnswerSchema = new mongoose.Schema({
//   description: String,
//   isCorrect: Boolean,
//   maxlength: [200, 'La respueta no puede contener más de 200 caracteres']
// })

const QuestionnaireSchema = new mongoose.Schema({
  questionnaireTitle: String,
  questions: [{
    questionTitle: String,
    answers: [{
      description: String,
      isCorrect: Boolean
    }]
  }],
})

module.exports = mongoose.models.Questionnaire || mongoose.model('Questionnaire', QuestionnaireSchema);