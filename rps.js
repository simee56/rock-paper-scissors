let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const uscore = document.querySelector("#user-score");

const cscore = document.querySelector("#comp-score");


let genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random()* 3) ;
    return options[randomIdx];
};

const drawGame = () =>{
    msg.innerText ="Game is draw! Play again.";
    msg.style.backgroundColor ="#081b31";

};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        uscore.innerText = userScore;
        msg.innerText = `Yay! You won.Yours ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cscore.innerText = compScore;
        msg.innerText =`Oops! You lost.computer's ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "red";

    }
};


const playGame = (userChoice) =>{
    //generating computer's choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}
)