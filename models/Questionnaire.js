const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  description: String,
  isCorrect: Boolean,
  maxlength: [200, 'La respueta no puede contener más de 200 caracteres']
})
const QuestionnaireSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Por favor ingresa una pregunta'],
    unique: true,
    trim: true,
    maxlength: [200, 'La pregunta no puede contener más de 200 caracteres']
  },
  answers: [AnswerSchema],
  required: true,
})

module.exports = mongoose.models.Questionnaire || mongoose.model('Questionnaire', QuestionnaireSchema);