// Your first game

let playGame = confirm("shall we play rock, paper, or scissors?");
if (playGame){
    //play game
    let playerChoice = prompt("Please enter rock paper, or scissors"); 
    
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne ==="rock" || playerOne === "scissors" || playerOne == "paper"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? "paper" 
            : "scissors";


        }else{
            alert("You didn't enter rock, paper or scissors")
        }
    }else{
        alert("I guess you changed your mind.")
    }
} else{
    alert("Ok, next time.!")
}