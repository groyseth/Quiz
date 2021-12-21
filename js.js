var backBtn = document.getElementById("back");
var input = localStorage.getItem("input", input);
var right = localStorage.getItem("right", right);
var nameList = document.getElementById("name");
var numberList = document.getElementById("number");
var scoreList = document.getElementById("scoreList");
var scoreCount = document.getElementById("scoreCount");
var scoreLength = [];



backBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location="index.html"
})


    



function scoreBoard(){
    
var olfun = document.querySelector("#list-of-score");
    olfun.innerHTML = "";
    
    var newList = document.createElement("li");
    newList.textContent = " congradulations " + input + " you got " + right; 
    olfun.appendChild(newList);
    
console.log(olfun)
}

function renderLastRegistered() {

    nameList.textContent = input;
    
    numberList.textContent = right;
}


renderLastRegistered();
scoreBoard();
