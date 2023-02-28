function Quiz(questionList) {
    this.questionList = questionList;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestion = function () {
    return this.questionList[this.questionIndex];
}