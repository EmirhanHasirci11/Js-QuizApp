function UI() {
    this.btn_start = document.querySelector(".btn_start");
    this.btn_next = document.querySelector(".next_btn");
    this.btn_close=document.querySelector(".btn-close")
    this.btn_replay=document.querySelector(".btn_replay");
    this.btn_quit=document.querySelector(".btn_quit");
    this.btn_settings=document.querySelector(".btn_settings");   
    this.quiz_box=document.querySelector(".quiz_box");
    this.option_list =document.querySelector(".option_list");
    this.score_text=document.querySelector(".score_text");
    this.score_box=document.querySelector(".score_box")
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second")
    this.time_line=document.querySelector(".time_line")
    this.category_shown_text=document.querySelector(".category_text span")
    this.category_alert=document.querySelector(".category_alert")
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.exclamationIcon ='<div class="icon"><i class="fas fa-exclamation-circle"></i></div>';

}
/*Shows the question and options in html */
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
    const options = this.option_list.querySelectorAll(".option");

    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

/*Showing score at the end*/
UI.prototype.showScore=function(totalQuestion,totalCorrectAnswer){
    this.score_text.innerHTML=`Total question:${totalQuestion} correct answer:${totalCorrectAnswer}`
}
/*Showing remaining question count on ui*/
UI.prototype.showRemainingQuestion=function(questionIndex, questionTotal) {
    let tag = `<span class="badge bg-warning">${questionIndex} / ${questionTotal}</span>`
    document.querySelector(".question_index").innerHTML = tag;
}