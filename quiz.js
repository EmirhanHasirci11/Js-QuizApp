function Quiz(questionList) {
    this.questionList = shuffleArray(questionList);
    this.questionIndex = 0;
    this.countOfCorrectAnswers=0;
}
Quiz.prototype.getQuestion = function () {
    return this.questionList[this.questionIndex];
}
Quiz.prototype.ChangeQuestionList=function(newList){
    this.questionList=newList
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}