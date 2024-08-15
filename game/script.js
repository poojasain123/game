let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>
    {
        const options = ["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random()*3);
        return options[randIdx];
    };

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("user choice = ",userChoice);

console.log("comp choice = ",compChoice);
}

if (userChoice === compChoice) {
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        userChoice = compChoice === "paper" ? false : true;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
// let msg=document.querySelector()