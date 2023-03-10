/*Reload the page for restarting the game */
ui.btn_quit.addEventListener("click", function () {
    window.location.reload();
})

/*Re:activate the start button */
ui.btn_replay.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.countOfCorrectAnswers = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})

/*Gets the next question */
ui.btn_next.addEventListener("click", function () {
    if (quiz.questionIndex != quiz.questionList.length - 1) {
        ui.time_text.textContent = "Remaining Time";
        quiz.questionIndex++;
        clearInterval(control)
        clearInterval(controlLine)
        ui.time_second.textContent = "10";
        startTimer(9)
        startTimerLine();
        ui.showQuestion(quiz.getQuestion());
        ui.showRemainingQuestion(quiz.questionIndex + 1, quiz.questionList.length)
        ui.btn_next.classList.remove("show");
    } else {
        clearInterval(control)
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active")
        ui.showScore(quiz.questionList.length, quiz.countOfCorrectAnswers)
        
    }
})
/*Starts the game*/

ui.btn_start.addEventListener("click", function () {
    objOffcanvas.hide()
    ui.quiz_box.classList.add("active");
    startTimer(9);
    startTimerLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showRemainingQuestion(quiz.questionIndex + 1, quiz.questionList.length)
    ui.btn_next.classList.remove("show");
    ui.category_shown_text.hide
    ui.btn_settings.hide;
});
/*Settings close button*/

ui.btn_close.addEventListener("click", () => {
    offcanvas.classList.toggle("show")
})
ui.btn_settings.addEventListener("click", function () {
    if (settingsControl == true) {
        objOffcanvas.show();
        settingsControl = false;

    } else {

        offcanvas.classList.toggle("show")
    }
})