export default class KoreanVowelAndConsonantsModel {
  constructor(id, question, type, choices, answer, explanation) {
    this.id = id;
    this.question = question;
    this.type = type;
    this.choices = choices || null;
    this.answer = answer;
    this.explanation = explanation;
  }
}