var timeLeft = 100;
var downloadTimer = setInterval(function(){
timeLeft--;
document.getElementById("timer").textContent = timeLeft;
if(timeLeft <= 0)
    clearInterval(downloadTimer);
},1000);


