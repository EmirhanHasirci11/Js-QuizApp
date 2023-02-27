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


document.querySelector(".btn_start").addEventListener("click", function () {
    document.querySelector(".quiz_box").classList.add("active");
    showQuestion(quiz.getQuestion());
    next_btn.classList.remove("show");
    

});

var next_btn=document.querySelector(".next_btn");
next_btn.addEventListener("click", function () {
    if (quiz.questionIndex != quiz.questionList.length - 1) {
        quiz.questionIndex++;
        showQuestion(quiz.getQuestion());
        next_btn.classList.remove("show");
    } else {
        console.log("Quiz is over");
    }
})


const option_list = document.querySelector(".option_list")
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function showQuestion(question) {
    let questionText = `<span> ${question.questionText}</span>`
    let optionHtml = '';
    for (let option in question.options) {
        optionHtml +=
            `
        <div class="option">
        <span><b>${option}</b>: ${question.options[option]}</span>
        </div>
        `
    }
    document.querySelector(".question_text").innerHTML = questionText;
    option_list.innerHTML = optionHtml;
    const options = option_list.querySelectorAll(".option");

    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}
function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();
    if (question.controlTheAnswer(answer)) {
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }
    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}
