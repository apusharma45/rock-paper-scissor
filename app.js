let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const draw = (userChoice) => {
    msg.innerText = `Draw! ${userChoice} vs ${userChoice}`;
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin==true) {
        ++userScore;
        document.getElementById("user-score").innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        ++compScore;
        document.getElementById("comp-score").innerText = compScore;
        msg.innerText = `You losed! ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "#A60707";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(compChoice === userChoice) {
        draw(userChoice);
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = (compChoice === "scissors" ?true:false);
        }
        else if(userChoice === "paper") {
            userWin = (compChoice === "rock"?true:false);
        }
        else {
            userWin = (compChoice === "paper"?true:false);
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})