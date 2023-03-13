function Quiz(questionList,qCount=10) {
    this.questionCount=qCount;
    this.questionList = shuffleArray(questionList,this.questionCount)
    this.questionIndex = 0;    
    this.countOfCorrectAnswers=0;
}
Quiz.prototype.getQuestion = function () {
    return this.questionList[this.questionIndex];
}
Quiz.prototype.ChangeQuestionList=function(newList,qCount=10){
    this.questionList=shuffleArray(newList,qCount)
 
}
function shuffleArray(array,qCount=10) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array.slice(0,qCount);
}