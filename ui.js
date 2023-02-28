function UI() {
    this.btn_start = document.querySelector(".btn_start");
    this.next_btn = document.querySelector(".next_btn");
    this.quiz_box=document.querySelector(".quiz_box");
    this.option_list =document.querySelector(".option_list");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
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