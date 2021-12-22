var questOption = [
    {
        q: "1. The external JavaScript file must contain the <script> tag.",
        options: ["True", "False"],
        correct: "False"
    },
    {
        q: "2. Where is the correct place to insert a JavaScript?",
        options: ["The <body>", "The <head>", "Both the <head> and <body>"],
        correct: "Both the <head> and <body>"
    },  
    {
        q: "3. How do you write *Hello World* in an alert box?",
        options: ["msgBox()", "alert()", "alertBox()", "msg"],
        correct: "alert()"
    },
    {
        q: "4. Inside which HTML element do we put the JavaScript?",
        options: ["<JavaScript>", "<scripting>", "<script", "<js>"],
        correct: "<script>"
    }
]

// var backBtn = document.getElementById("back");
var subBtn = document.getElementById("submitBtn");
var output = document.getElementById("correcter");
var questions = document.getElementById("pageQuestion");
var startBtn = document.getElementById("startButton");
var pageTimer = document.getElementById("pageTimer");
var timer;
var currentQuest;
var right = 0;


// on click starts timer, shows question and starts the cycle of questions
startBtn.addEventListener("click", function(){
  
    
    timer = 20;
    timeCountdown();
    currentQuest = 0;
    showNextQuestion();
    
})

function timeCountdown () {
    var interval = setInterval(function () {
        timer--;
        pageTimer.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            alert("game over");
            initials()                
        }
     
    }, 1000)
}
// cylces through the questions
function showNextQuestion () {
    var questionEl = document.querySelector("#question");
    questionEl.textContent = questOption[currentQuest].q

    var olElement = document.querySelector("#pageQuestion");
    olElement.innerHTML = ""
    for(i=0; i<questOption[currentQuest].options.length; i++){
        var newLi = document.createElement("li");
        newLi.textContent = questOption[currentQuest].options[i]
        newLi.addEventListener("click", checkAnswer)
        olElement.appendChild(newLi)
    }

}

function checkAnswer () {
    console.log(this.textContent)
    if(this.textContent == questOption[currentQuest].correct){
        
        right += 1;
        localStorage.setItem("right", right);
        output.textContent = ("correct");
        
        
    }else {
        console.log(output)
        timer -= 2;
        output.textContent = ("wrong");
    
        
    }
            
    

    
    currentQuest++;
    if(currentQuest < questOption.length){
        showNextQuestion();         
    }else{
        initials()
    }
    
}
// prompts initals then changes the page
function initials(){
     var input = prompt("initials please");
    localStorage.setItem("input", input);
    location.replace("./score.html");
    
}