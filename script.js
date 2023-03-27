var quiz = new Quiz(selectCategory("General"));
const ui = new UI();

/*Checking the option and adding correct or incorrect attribute on option element*/
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
        for (let i = 0; i < ui.option_list.children.length; i++) {
            let opt = ui.option_list.children[i];
            if (question.controlTheAnswer(opt.querySelector("b").innerHTML)) {
                opt.classList.add("correct");
                opt.insertAdjacentHTML("beforeend", ui.exclamationIcon)
            }
        }
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");

}

/*this variable used for controlling interval*/
let control;
function startTimer(time) {
    control = setInterval(timer, 1000)

    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(control);
            clearInterval(controlLine)
            ui.time_text.textContent = "Time is over";
            let answer = quiz.getQuestion().correctAnswer;
            for (let opt of ui.option_list.children) {
                if (opt.querySelector("span b").textContent == answer) {
                    opt.classList.add("correct");
                    opt.insertAdjacentHTML("beforeend", ui.exclamationIcon);
                }
                opt.classList.add("disabled");
            }
            ui.btn_next.classList.add("show")
        }
    }
}

var x = window.matchMedia("(max-width: 600px)")
let controlLine;
function startTimerLine() {
    let line_width = 550;
    if (x.matches) {
        line_width = 380;
    }
    controlLine = setInterval(timer, 10)
    function timer() {
        if (x.matches) {
            line_width-=0.3723;
        } else {
            line_width -= 0.55;
        }
        ui.time_line.style.width = line_width + "px";
        if (line_width <= 0) {
            clearInterval(controlLine);
        }
    }
}

/*Select list for category */
let selected = document.querySelectorAll(".category-select select ")
let category="General";
/*Changes the category on every selection change */
selected.forEach((select) => {
    select.addEventListener("change", (e) => {
        ui.category_shown_text.innerHTML = e.target.value        
        category=e.target.value;
        quiz.ChangeQuestionList(selectCategory(category),questionCount)
        ui.alert_text.innerHTML="Selected category is:"
        ui.category_alert.innerHTML = e.target.value
        objCanvasBottom.show()
        setTimeout(function () {
            objCanvasBottom.hide()
        }, 2000);
    })
})
function selectCategory(category) {
    for (var i = 0; i < questionList.length; i++) {
        if (questionList[i]["Category"] == category) {
            return questionList[i]["List"]
        }
    }
    return selectCategory("General")
}
var questionCount=10;
/*selecting question count */
let selectedQuestionCountSelector = document.querySelectorAll(".question_count_selection input")

/*Changes the category on every selection change */
selectedQuestionCountSelector.forEach((qCount) => {
    qCount.addEventListener("change", (e) => {
        ui.question_shown_text.innerHTML = e.target.value
        guestionCount=e.target.value;        
        quiz.ChangeQuestionList(selectCategory(category),questionCount)               
        ui.alert_text.innerHTML="Selected question count is:"
        ui.category_alert.innerHTML = e.target.value
        objCanvasBottom.show()
        setTimeout(function () {
            objCanvasBottom.hide()
        }, 2000);

    })
})

/*Settings canvas options */
var offcanvas = document.getElementById("Settings-Canvas");
var objOffcanvas = new bootstrap.Offcanvas(offcanvas, {
    backdrop: false,
    keyboard: false,
    scroll: false,

});

/*Alert canvas options */
var offcanvasBottom = document.getElementById("Bottom-Alert");

var objCanvasBottom = new bootstrap.Offcanvas(offcanvasBottom, {
    backdrop: false,
    keyboard: false,
    scroll: false,

});
var settingsControl = true;
