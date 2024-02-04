document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors"];
  
    document.getElementById("rock").addEventListener("click", function () {
      playGame("rock");
    });
  
    document.getElementById("paper").addEventListener("click", function () {
      playGame("paper");
    });
  
    document.getElementById("scissors").addEventListener("click", function () {
      playGame("scissors");
    });
  
    function playGame(playerChoice) {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const result = determineWinner(playerChoice, computerChoice);
  
      displayResult(playerChoice, computerChoice, result);
    }
  
    function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return "It's a tie!";
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return "You win!";
      } else {
        return "You lose!";
      }
    }
  
    function displayResult(playerChoice, computerChoice, result) {
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `
        You chose ${playerChoice}.<br>
        Computer chose ${computerChoice}.<br>
        Result: ${result}
      `;
    }
  });
  