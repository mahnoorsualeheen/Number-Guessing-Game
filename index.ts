#!/usr/bin/env node

console.log("________________________________");
console.log("                                ")
console.log("******Number Guessing Game******");
console.log("________________________________");

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 10 + 1); // Computer will generate a ramdom number
{
const answer = await inquirer.prompt([{
    message: "Can I know your name : ", type: "input", name: "userName",
}])
console.log("Hello " + answer.userName + ", I am your friend. \nAre you ready to play with me!\nLets start")
console.log("")
}
const answer = await inquirer.prompt([
    // User's input for guessing a number.
    {
        message:"Guess a number between 1 to 10 : ",
        type: "number",
        name: "guessedNumber"
    }
])

if(answer.guessedNumber === randomNumber) // compare random number with user's Guessed number
{
    console.log("Congratulations! You Guessed right number")
    console.log("I also guessed " + randomNumber)
}
else {
    console.log("Oops! You Guessed wrong number")
    console.log("Right number is : " + randomNumber);
    console.log("Try Again \n See you soon");
    
    
}
