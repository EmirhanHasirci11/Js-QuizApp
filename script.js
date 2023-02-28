const quiz = new Quiz(questionList);
const ui =new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    showQuestion(quiz.getQuestion());
    showRemainingQuestion(quiz.questionIndex+1,quiz.questionList.length)
    ui.next_btn.classList.remove("show");    
});


ui.next_btn.addEventListener("click", function () {
    if (quiz.questionIndex != quiz.questionList.length - 1) {
        quiz.questionIndex++;
        showQuestion(quiz.getQuestion());
        showRemainingQuestion(quiz.questionIndex+1,quiz.questionList.length)
        ui.next_btn.classList.remove("show");
    } else {
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active")
        ui.showScore(quiz.questionList.length,quiz.countOfCorrectAnswers)
        
    }
})
ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})
ui.btn_reply.addEventListener("click",function(){
    quiz.questionIndex=0;
    quiz.countOfCorrectAnswers=0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})




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
    ui.option_list.innerHTML = optionHtml;
    const options = ui.option_list.querySelectorAll(".option");

    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}
function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();
    if (question.controlTheAnswer(answer)) {
        quiz.countOfCorrectAnswers++;
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");
}
function showRemainingQuestion(questionIndex,questionTotal){
    let tag=`<span class="badge bg-warning">${questionIndex} / ${questionTotal}</span>`
    document.querySelector(".question_index").innerHTML=tag;
}
