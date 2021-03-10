var codeContentEl = document.querySelector("#codeContent")
var questionHolderEL= document.querySelector("#questionHolder");
var allContentEl = document.querySelector("#allContentHere");


var incrementor = 0
var inkerDinker = incrementor * 4 + 3;
var codeQuestions = [
    "Inside which HTML element do we put the JavaScript?",
    "Where is the correct place to insert a JavaScript?",
    "How do you write 'Hello World' in an alert box?",
    "How do you create a function in JavaScript?",
    "How do you call a function named 'myFunction'?",
    
]
var codeAnswers = [
    "<javascript>" ,
    "<script>",
    "<scripting>",
    "<js>",
    "The <head> section" ,
    "The <img> section",
    "The <div> section",
    "The <p> section",
    "msgBox('Hello World');" ,
    "msg('Hello World');",
    "alert('Hello World');",
    "alertBox('Hello World');",
    "function = myFunction()" ,
    "function myFunction()",
    "function: myFunction()",
    "function myFunction[]",
    "call function myFunction()" ,
    "call myFunction()",
    "myFunction()",
    "myFunction(call)",
]

var timeLeft = 100;
var highScore = localStorage.getItem('bestScore');
var winnerWinner = localStorage.getItem('goat');
var starterScore = 0;
// debugger;


function highScoreLanding () {
    var sectionDiv = document.querySelector("#highScoreContent");
    var nameInput = document.querySelector("input").value;
    var sectionH1 = document.querySelector(".highScoreHeader");
    var sectionP = document.querySelector(".highScoreP");
    var sectionInput = document.querySelector(".inputP");
    var sectionIntialsGoHere = document.querySelector("#initialsGoHere");
    var sectionButton = document.querySelector(".initialsButton");
    
    
    sectionH1.textContent = "High Score";

    
    if (starterScore >= highScore){
        highScore = starterScore;
        winnerWinner = nameInput;
        alert("Congrats! New High Score!")
        localStorage.setItem('bestScore', highScore);
        localStorage.setItem('goat', winnerWinner);
    };

    sectionP.textContent = winnerWinner + " - " + highScore;

    sectionInput.remove();
    sectionButton.remove();
    sectionIntialsGoHere.remove();

    //create go back and  to starter page button
    var goBackButton = document.createElement("button")
    goBackButton.className = "navBtn";
    goBackButton.textContent = "Go Back";

    var clearButton = document.createElement("button")
    clearButton.className = "navBtn";
    clearButton.textContent = "Clear High Score";
    
    sectionDiv.appendChild(goBackButton);
    sectionDiv.appendChild(clearButton);

    sectionDiv.addEventListener("click", function(event){
        
        var clearOrGoHome = event.target;
        clearOrGoHome = clearOrGoHome.textContent;
        clearOrGoHome = clearOrGoHome.toLowerCase();
        
        if (clearOrGoHome === "go back"){
            window.location = "https://n2theFray.github.io/coding-quest"
        } else if ( clearOrGoHome === "clear high score"){
            sectionP.textContent = "";
            localStorage.clear();
        }


    })
}

function getHighScore () {
    timeLeft = 0;
    document.getElementById("timer").textContent = timeLeft;

    var sectionDiv = document.createElement("div");
    sectionDiv.id = "highScoreContent";

    var sectionH1 = document.createElement("h1");
    sectionH1.className = "highScoreHeader";
    sectionH1.textContent = "All Done";
    sectionDiv.appendChild(sectionH1);

    var sectionP = document.createElement("p");
    sectionP.className = "highScoreP";
    sectionP.textContent = "Your final score is " + starterScore;
    sectionDiv.appendChild(sectionP);
    
    var inputP = document.createElement("p");
    inputP.className = "inputP";
    inputP.textContent = "Enter Initials: ";
    sectionDiv.appendChild(inputP);

    var sectionInput = document.createElement("input");
    sectionInput.id = "initialsGoHere"
    sectionInput.type = "text";
    sectionInput.placeholder = "Enter Initials Here";
    sectionDiv.appendChild(sectionInput);
    
    var sectionButton = document.createElement("button");
    sectionButton.className = "initialsButton";
    sectionButton.textContent = "Submit";
    sectionDiv.appendChild(sectionButton);
    

    allContentEl.appendChild(sectionDiv);
    
    var highScoreContent = document.querySelector(".initialsButton");
    highScoreContent.addEventListener("click", highScoreLanding);
}

function timeGoesOn (){
    // debugger;
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
    // debugger;
    if (incrementor === codeQuestions.length || timeLeft <=1){
            
       getHighScore();
    } else { questionBuilder();}
}

function questionBuilder () {


    //create div to hold questions
    var questionHolder = document.createElement("div");
    questionHolder.id = "questionHolder"
    
    for ( var i = incrementor; i<= codeQuestions.length-1; i++){
        
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
            // debugger;
            for (var i = incrementor*4; i <= (incrementor * 4 + 3); i++){ 
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
            // incrementor ++;
    }
    incrementor ++;
        
    questionHolder.addEventListener("click", function(event){
        
        var rightOrWrong = event.target;
        // debugger;
        rightOrWrong = rightOrWrong.innerText;
        rightOrWrong = rightOrWrong.toLowerCase();
        if (rightOrWrong === "<script>" || 
            rightOrWrong === "the <head> section" || 
            rightOrWrong === "alert('hello world');" || 
            rightOrWrong === "function myfunction()" ||
            rightOrWrong === "myfunction()"  
        ){
            starterScore ++;
            alert("correct!")
        } else { 
            timeLeft -= 10;
            document.getElementById("timer").textContent = timeLeft;
        }
        questionReset();
    });
    // debugger;
}


codeContentEl.addEventListener("click",timeGoesOn);
codeContentEl.addEventListener("click", startChallenge);