const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const question1 = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");
const scoreE1 = document.getElementById("score")

question1.innerText = `what is ${num1} multiply by ${num2}?`;
const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
if (!score){
    score = 0;
}
scoreE1.innerHTML = `Score: ${score}`

form.addEventListener("submit",()=>{
    const userAnswer = +input.value;
    if (userAnswer == correctAnswer){
        score++;
        updatelocalStorage()
    }
    else{
        score--;
        updatelocalStorage()
    }
    
});

function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}