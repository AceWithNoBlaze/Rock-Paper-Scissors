let theComputerChoice;
let thePlayerChoice;
const choices = ["rock", "paper", "scissor"]; //array length is 3
let pointComputer = 0;
let pointPlayer = 0;
let playRound = 0;
let roundLength = 0;

function getComputerChoice() {
  if (
    thePlayerChoice == choices[0] ||
    thePlayerChoice == choices[1] ||
    thePlayerChoice == choices[2]
  ) {
    theComputerChoice = Math.random(); // makes a random decimal between 0.01-0.99
    theComputerChoice *= choices.length; // let the random decimal be between 0.01-3.99
    theComputerChoice = Math.floor(theComputerChoice); // turns the decimal into an integer between the respected arrays length Choices
    console.log(`pc: ${choices[theComputerChoice]}`);
    return choices[theComputerChoice];
  } else {
    return;
  }
}

function getPlayerChoice() {
  thePlayerChoice = prompt("Choose between rock, paper or scissors: ");

  if (!!thePlayerChoice == true) {
    thePlayerChoice = thePlayerChoice.toLowerCase(); // make it lowercase so that it's equal to my arrays values
    console.log(`You: ${thePlayerChoice}`);
    if (
      thePlayerChoice == choices[0] ||
      thePlayerChoice == choices[1] ||
      thePlayerChoice == choices[2]
    ) {
      alert("1 2 3...");
      return thePlayerChoice;
    } else {
      return console.log("You're doing it wrong!");
    }
  } else {
    return console.log("You left us, why aren't you trying?");
  }
}

function oneRound(playerSelection, computerSelection) {
  const A = computerSelection == "rock" && playerSelection == "scissor"; //Lose
  const B = computerSelection == "rock" && playerSelection == "paper"; //Win
  const C = computerSelection == "rock" && playerSelection == "rock"; //Draw
  const D = computerSelection == "paper" && playerSelection == "scissor"; //Win
  const F = computerSelection == "paper" && playerSelection == "rock"; //Lose
  const G = computerSelection == "paper" && playerSelection == "paper"; //Draw
  const H = computerSelection == "scissor" && playerSelection == "rock"; //Win
  const I = computerSelection == "scissor" && playerSelection == "paper"; //Lose
  const J = computerSelection == "scissor" && playerSelection == "scissor"; //Draw
  if (A || F || I) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    pointComputer++;
  } else if (B || D || H) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    pointPlayer++;
  } else if (C || G || J) {
    console.log("It was a draw try again.");
    oneRound(getPlayerChoice(), getComputerChoice());
  } else {
    console.warn("Don't let the next time be a waste of time...");
  }
}


while (roundLength < 5) {
  console.log(`round ${roundLength + 1}`);
  oneRound(getPlayerChoice(), getComputerChoice());

  if (
    thePlayerChoice == choices[0] ||
    thePlayerChoice == choices[1] ||
    thePlayerChoice == choices[2]
  ) {
    playRound = ++playRound;
    roundLength++;
  }

  if (!thePlayerChoice == true) {
    break;
  }

  console.log(`${pointPlayer}:${pointComputer}`);
  if (pointPlayer == 3 || pointComputer == 3) {
    break;
  }
}

if (playRound >= 4) {
  if (pointPlayer > pointComputer) {
    console.log("you've won!");
  } else {
    console.log("you've lost!");
  }
}
