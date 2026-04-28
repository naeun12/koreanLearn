export default class pastPresentAndFutureTenseModel {
  constructor(sentence, choices, answer, translation, explanation) {
    this.sentence = sentence;           // Korean sentence
    this.choices = choices;             // Multiple choice answers
    this.answer = answer;               // Correct answer
    this.translation = translation;     // English meaning
    this.explanation = explanation;     // Grammar explanation
  }
}