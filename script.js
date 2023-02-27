function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}
Question.prototype.controlTheAnswer = function (answer) {
    return answer === this.correctAnswer;
}
let questionList = [

    new Question("2 + 2 ifadesinin sonucu nedir?", { a: "5", b: "4", c: "8", d: "6" }, "b"),
    new Question("10 + 2 ifadesinin sonucu nedir?", { a: "12", b: "4", c: "42", d: "40" }, "a"),
    new Question("40 + 23 ifadesinin sonucu nedir?", { a: "112", b: "43", c: "63", d: "89" }, "c"),
    new Question("2 + 5 ifadesinin sonucu nedir?", { a: "5", b: "4", c: "8", d: "7" }, "d")
]
function Quiz(questionList) {
    this.questionList = questionList;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestion = function () {
    return this.questionList[this.questionIndex];
}
const quiz = new Quiz(questionList);
document.querySelector("#btn-start").addEventListener("click", function () {
    console.log(quiz.questionList.length)
    console.log( quiz.questionIndex<quiz.questionList.length? quiz.getQuestion():"Quiz is over")    
    quiz.questionIndex++;
});
