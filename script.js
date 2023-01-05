const choices = ["rock","paper","scissor"]; //array length is 3

 function getComputerChoice() {
     
     let theChoice = Math.random(); // makes a random decimal between 0.01-0.99
     console.log(theChoice);
     theChoice *= choices.length; // let the random decimal be between 0.01-3.99
     console.log(theChoice);
     theChoice = Math.floor(theChoice); // turns the decimal into an integer between the respected arrays length Choices
     console.log(theChoice);
     return choices[theChoice];
 }

 console.log(getComputerChoice());

