var backBtn = document.getElementById("back");
var input = localStorage.getItem("input", input);
var right = localStorage.getItem("right", right);
var nameList = document.getElementById("name");
var numberList = document.getElementById("number");
var scoreList = document.getElementById("scoreList");
var scoreCount = document.getElementById("scoreCount");
var scoreLength = [right + input];
var submitBtn = document.getElementById("save");


backBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location="index.html"
})


    



function scoreBoard(){
    
        submitBtn.addEventListener("click", function(){
        
    var olfun = document.querySelector("#newpart");
    olfun.innerHTML = "";
    scoreLength = document.createElement("li");
    scoreLength.textContent = " congradulations " + input + " you got " + right; 
    
    olfun.appendChild(scoreLength);  
 
    }
   
 )}
function renderLastRegistered() {

    nameList.textContent = input;
    
    numberList.textContent = right;
    
}

// scoreLength.push(){

// }


renderLastRegistered();
scoreBoard();
