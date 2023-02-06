let theComputerChoice;
let thePlayerChoice;
const choices = ["rock", "paper", "scissor"]; //array length is 3
let pointComputer = 0;
let pointPlayer = 0;
let roundLength = 1;
// DOM edits
//global variables
let promptLetter = document.querySelector("div.text");
let player = document.querySelector("p#player");
let computer = document.querySelector("p#pc");
let round = document.querySelector("div#round");

function typeLetter(e, callback) {
  let textArray = e.split("");
  let sentence = "";
  for (let i = 0; i < textArray.length; i++) {
    setTimeout(() => {
      sentence += textArray[i];
      promptLetter.textContent = sentence;
      if (i == textArray.length-1) {
        callback();
      };
    }, i * 100); // if I don't do * i, it will all come after 100 seconds. this indicates that there is a loop
  }
} // it shows letter per letter

function getPlayerChoice(e) {
  let thePlayerChoice = e.target.textContent;
  promptLetter.textContent = typeLetter(thePlayerChoice, () => {});
  console.log(thePlayerChoice);
  return thePlayerChoice; // Add this line
 } // allows the player to choose

 function getComputerChoice() {
    theComputerChoice = Math.floor(Math.random() * choices.length); 
    //This combines the calculation of a random decimal, scaling it based on the length of the choices array, and rounding it down to an integer into a single line of code.
    console.log(choices[theComputerChoice]);
    return choices[theComputerChoice];
 } // allows the computer to choose

 function playRound(playerSelection, computerSelection, callback) {
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
    typeLetter(`You Lose! ${computerSelection} beats ${playerSelection}`, callback);
    pointComputer++;
    roundLength++;
    computer.textContent = `computer = ${pointComputer}`;
    round.textContent = `Round ${roundLength} `;
  } else if (B || D || H) {
    typeLetter(`You Win! ${playerSelection} beats ${computerSelection}`, callback);
    pointPlayer++;
    roundLength++;
    player.textContent = `player = ${pointPlayer}`;
    round.textContent = `Round ${roundLength} `;
  } else if (C || G || J) {
    typeLetter("It was a draw try again.", callback);
    playRound(getPlayerChoice, getComputerChoice, callback);
  } 
} // the round goes until roundLength reaches 5

function game() {
  Determination = confirm("Are you prepared to sit and fight?")
  
  if (!Determination == true) return;
  typeLetter("Choose between rock, paper or scissor: ", () => {
    // Local variables
    let rock = document.querySelector("button#rock");
    let paper = document.querySelector("button#paper");
    let scissor = document.querySelector("button#scissor");
    let buttons = document.querySelectorAll("button");
    // properties
    rock.textContent = "rock";
    paper.textContent = "paper";
    scissor.textContent = "scissor";

    buttons.forEach(button => button.addEventListener("click", (e) => {
      buttons.forEach(button => button.disabled=true);
      playRound(getPlayerChoice(e), getComputerChoice(), () => {
        if (button.disabled == true & !(pointPlayer==5) & !(pointComputer==5)){
          playRound;
          buttons.forEach(button => button.disabled=false);
        }

        if (pointComputer==5){
          setTimeout(typeLetter("you've tried, but yet that's not enough...", () => {setTimeout(
          typeLetter("Refresh or ctrl+r to start again", () => {}),2000) 
          }), 2000)
        }

        if(pointPlayer==5){
          setTimeout(typeLetter("you've made it...", () => {setTimeout(
          typeLetter("Refresh or ctrl+r to start again", () => {}), 2000)
          }),2000)
        }
      });
    }))
  });
} // the game itself


game()


console.log("you've completed")





 

