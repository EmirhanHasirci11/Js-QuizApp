function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}
Question.prototype.controlTheAnswer = function (answer) {
    return answer === this.correctAnswer;
}
