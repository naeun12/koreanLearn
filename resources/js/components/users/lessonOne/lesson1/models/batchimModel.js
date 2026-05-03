export default class batchimModel {
    constructor(question, choices, answer, explanation) {
        this.question = question;
        this.choices = choices; // array
        this.answer = answer;
        this.explanation = explanation;
    }
}