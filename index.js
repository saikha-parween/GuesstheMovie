
var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "saikha",
    score: 4,
  }
]

// array of objects
var questions = [{
  question: "Main apni favourite hoon!!! ",
  answer: "Jab we met"
}, 
{question:" Mogambo khush hua",
answer:"Mr India"},
{
  question: "Jaa Simran, jaa. Jeele apni zindagi ",
  answer: "DDLJ"
},
{
  question: "Kitne aadmi the? ",
  answer: "Sholay"
},
{
  question: "Utha le re baba ",
  answer: "Hera pheri"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " GUESS THE FAMOUS MOVIES DIALOUGE");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
  

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


