function UI() {
    this.btn_start = document.querySelector(".btn_start");
    this.next_btn = document.querySelector(".next_btn");
    this.quiz_box=document.querySelector(".quiz_box");
    this.option_list =document.querySelector(".option_list");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.score_text=document.querySelector(".score_text");
    this.score_box=document.querySelector(".score_box")
    this.btn_reply=document.querySelector(".btn_replay");
    this.btn_quit=document.querySelector(".btn_quit");
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second")
    this.time_line=document.querySelector(".time_line")
    this.btn_settings=document.querySelector(".settings_button");
    this.category_select=document.querySelector(".category_select");
}
UI.prototype.showQuestion = function (question) {
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
    this.option_list.innerHTML = optionHtml;
    const options = option_list.querySelectorAll(".option");

    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showScore=function(totalQuestion,totalCorrectAnswer){
    this.score_text.innerHTML=`Total question:${totalQuestion} correct answer:${totalCorrectAnswer}`
}