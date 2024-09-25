let userscore = 0;  // Corrected variable name
let compscore = 0;  // Corrected variable name

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const drawgame = () => {
    console.log("game was drawn");
    msg.innerText = "game was drawn. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, id, compchoice) => {
    if (userWin) {
        userscore++;  // Increment user score
        userScorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `You win! Your ${id} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;  // Increment computer score
        compScorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lose. Your ${id} loses to ${compchoice}`;  // Corrected message
        msg.style.backgroundColor = "red";
    }
};

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
}

const playgame = (id) => {
    console.log("user choice = ", id);

    // Generate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if (id === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (id === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (id === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, id, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const id = choice.getAttribute("id");
        playgame(id);
    });
});
