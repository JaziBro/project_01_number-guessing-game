import inquirer from "inquirer"

let computerGuess = Math.round(Math.random()*10)
let answers = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "Enter your guess between 1 to 10"
    }
])
if (computerGuess === answers.userGuess){
    console.log ("Congratulations! You Won")
} 
else console.log (`The number was ${computerGuess}, Sorry you lost the game`)