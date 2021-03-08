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

// timer function
function timeGoesOn (){
    var timeLeft = 100;
    var downloadTimer = setInterval(function(){
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if(timeLeft <= 0)
        clearInterval(downloadTimer);
    },1000);
}

function startChallenge (){

    //remove original header and insert question
    document.querySelector(".codeHeader").textContent = codeQuestions[0];
    document.querySelector(".welcomeContent").textContent = "";

    //remove quiz Start button
    var removeStart = document.querySelector(".quizBtn");
    removeStart.remove();
    debugger;
    //div to hold buttons
    var buttonHolder = document.createElement("div");
    buttonHolder.className = "choiceBtns";

    // loop to add three choices
    for (var i = 0; i <= 2; i++){ 
        //add buttons that contain answers
    var answerBtn = document.createElement("button");
    answerBtn.className = "answers";
    answerBtn.textContent = codeAnswers[i];

     //add buttons to button holder div
     buttonHolder.appendChild(answerBtn);
}

   

    //add button div to section
    codeContentEl.appendChild(buttonHolder);
    questionBuilder;
}   

function questionBuilder () {
     //div to hold buttons
     var buttonHolder = document.createElement("div");
     buttonHolder.className = "choiceBtns";
 
     //add buttons that contain answers
     var answerBtn = document.createElement("button");
     answerBtn.className = "answers";
     answerBtn.textContent = codeAnswers[0];
 
     //add buttons to button holder div
     buttonHolder.appendChild(answerBtn);
 
     //add button div to section
     codeContentEl.appendChild(buttonHolder);

     startChallenge()
}

codeContentEl.addEventListener("click",timeGoesOn);
codeContentEl.addEventListener("click", startChallenge);
console.log(codeQuestions[0]);