

//alert() it directly 
//confirm()
//prompt()
var userChoice
var cpuChoice 
var cpuNumber
var wins = 0
var losses = 0
var ties = 0
var choices = ["rock", "paper", "scissors"]

function getUserChoice (ourChoice){
    userChoice = choices[ourChoice]
    console.log(userChoice)
    getCpuChoice()
    
}
function getCpuChoice (){
    cpuNumber = Math.floor((Math.random()*choices.length));
    cpuChoice = choices[cpuNumber]
    console.log(cpuChoice)
    getResult()
}
function getResult () {
    
    if(userChoice === cpuChoice){
        console.log('Its a Tie!')
        ties++
    }
    else if (userChoice === 'scissors' && cpuChoice === 'paper' ||
             userChoice === 'rock' && cpuChoice === 'scissors' ||
             userChoice === 'paper' && cpuChoice === 'rock')
             {
                console.log('You Won!') 
                wins++
                console.log(wins)
             }
    else {
        
        console.log('You Lost')
        losses++
        
    }}

    console.log(userChoice)

    
    
