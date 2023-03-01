
const quiz = new Quiz(questionList);
const ui =new UI();
ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    startTimer(9);
    startTimerLine();
    showQuestion(quiz.getQuestion());
    showRemainingQuestion(quiz.questionIndex+1,quiz.questionList.length)
    ui.next_btn.classList.remove("show");    
});


ui.next_btn.addEventListener("click", function () {
    if (quiz.questionIndex != quiz.questionList.length - 1) {
        quiz.questionIndex++;
        clearInterval(control)
        clearInterval(controlLine)
        ui.time_second.textContent="10";
        startTimer(9)
        startTimerLine();
        showQuestion(quiz.getQuestion());
        showRemainingQuestion(quiz.questionIndex+1,quiz.questionList.length)
        ui.next_btn.classList.remove("show");
    } else {
        clearInterval(control)
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
ui.btn_settings.addEventListener("click",function(){
    ui.category_select.classList.toggle("active")
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
    clearInterval(control)
    clearInterval(controlLine)
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
let control;
function startTimer(time){
   control= setInterval(timer,1000)

    function timer(){
        ui.time_second.textContent=time;
        time--;
        if(time<0){
            clearInterval(control);
            clearInterval(controlLine)
            ui.time_text.textContent="Time is over";

            let answer =quiz.getQuestion().correctAnswer;

            for(let opt of ui.option_list.children){
                if(opt.querySelector("span b").textContent==answer){
                    opt.classList.add("correct");
                    opt.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
                opt.classList.add("disabled");
            }
            ui.next_btn.classList.add("show")
        }
    }
}
let controlLine;
function startTimerLine(){
    let line_width=550;
    controlLine=setInterval(timer,10)
    function timer(){
        line_width-=0.55;
        ui.time_line.style.width=line_width+"px";
        if(line_width<=0){
            clearInterval(controlLine);
        }
    }
}