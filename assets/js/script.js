var codeContentEl = document.querySelector("#codeContent")

var codeQuestions = [
    "This is question 1",
    "This is question 2",
    "This is question 3"
]

var codeAnswers = [
    "Q1 right answer",
    "Q1 one",
    "Q1 two",
    "Q1 three",
    "Q2 one",
    "Q2 two",
    "Q2 three",
    "Q3 one",
    "Q3 two",
    "Q3 three"
]

function timeGoesOn (){
    var timeLeft = 100;
    var downloadTimer = setInterval(function(){
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if(timeLeft <= 0)
        clearInterval(downloadTimer);
    },1000);
}

codeContentEl.addEventListener("click",timeGoesOn);
console.log(codeQuestions[0]);