var codeContentEl = document.querySelector("#codeContent")
var questionHolderEL= document.querySelector("#questionHolder");
var allContentEl = document.querySelector("#allContentHere");
var incrementor = 0
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
    //remove quiz Start button and paragraph
    var removeStart = document.querySelector(".quizBtn");
    removeStart.remove();

    var removeP = document.querySelector(".welcomeContent");
    removeP.remove();
    
    var removeCodeContent = document.querySelector("#codeContent");
    removeCodeContent.remove();
    //Start questions
    questionBuilder();
   
}   
function questionReset(){
    var redButton = document.querySelector("#questionHolder")
    redButton.remove();

    questionBuilder();
}
//
function questionBuilder () {

    //create div to hold questions
    var questionHolder = document.createElement("div");
    questionHolder.id = "questionHolder"
    
    
    //create question H1
     var questionH1 = document.createElement("h1");
     questionH1.className = "questionGoesHere";
     questionH1.textContent = codeQuestions[incrementor];

     questionHolder.appendChild(questionH1);
     //div to hold buttons
     var buttonHolder = document.createElement("div");
     buttonHolder.className = "choiceBtns";
     buttonHolder.id= "nextQuestion";
 
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
     questionHolder.appendChild(buttonHolder);

     //add all content to body
     allContentEl.appendChild(questionHolder);
    incrementor ++;
    // debugger;
    
    questionHolder.addEventListener("click", questionReset);
}

// questionHolderEL.addEventListener("click", questionBuilder);
codeContentEl.addEventListener("click",timeGoesOn);
codeContentEl.addEventListener("click", startChallenge);
console.log(codeQuestions[0]);