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
        
        // storeLocalData()
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

function initials(){
     var input = prompt("initials please");
    localStorage.setItem("input", input);
    location.replace("./score.html");
    console.log(input)
}


  // var ulScore = document.querySelector("#list-of-score");
    // ulScore.innerHTML = newLi.textContent = localStorage.getItem("right", right);
    // newLi.textContent = localStorage.getItem("right", right)
    // var newLi = document.createElement("li");
        
    //     newLi.addEventListener("click", storageScore)
    //     olElement.appendChild(newLi)
    // function storageScore(){
    //     newLi.textContent = localStorage.getItem(right)
    // }






//Click on Start button
  // start the timer
  // display the first question with options 
    // check if index < questions.length
    //create a function with index as an argument
  //each option is a button with click event on it // may be use event.target with matches function

//Stopt the timer
  // if timer = 0;
  // if user finished the quiz

//Find out if user clicked option is correct or not
  //if correct : display message (for certain time period)
  //wrong : display msg for certain time period)
  // calculate the score (but don't display) and change the timer accordingly
// index++
//display the next question

//once user finished with last question
 // stop timer
 //ask for user initials in a form > take that info and display it with score
 //save initials and score in local storage
 // a href will refer to second html file