var questOption = [
    {
        q: "What is 4?",
        options: ["1", "2", "3", "4"],
        correct: "4"
    },
    {
        q: "What is 8?",
        options: ["5", "6", "7", "8"],
        correct: "8"
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
    // var element = event.target;
    
    // if (element.matches("#startButton")) {
    //     startBtn = element.getAttribute("data-state");
       
    //     element.textContent= "";
        
    //     element.setAttribute("data-state", "invisible")
    // }

    //     if (state === "visible") {
    //         element.dataset.state = "hidden";
    // }
    //     }
   
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
            alert("game over")       
            
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
        
        right ++;
        localStorage.setItem("right", right);
        output.textContent = ("correct");
        
        // storeLocalData()
    }else {
        console.log("incorrect")
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
    localStorage.setItem("score", input);
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