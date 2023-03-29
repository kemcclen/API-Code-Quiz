//Global variables 
var timer = document.getElementById("timer");
var timeCountEl = document.getElementById("timeCount");
var startButton = document.getElementById("startButton");
var gameEnd = document.getElementById("gameEnd");
var initials = document.getElementById("initials");
var enterInitials = document.getElementById("enterInitials");
var submitInitials = document.getElementById("submitInitials");
var highScoresContainer = document.getElementById("highScoresContainer");
var highScores = document.getElementById("highScores");
var backHome = document.getElementById("backHome");
//var timerSeconds =setInterval(setStartTime, 1000);
var answerOptions = document.getElementById("answerOptions");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var score = document.getElementById("score");
var questionsDivEl = document.getElementById("answersContainer");
var userInput = "";
var rightAnswer= "";
var scoreBoard = [];
var score= 0;
let i=0; // i is the QUestion Number


//Multiple choice questions
var questionsArray = [
    {
        question: "What tag is used to wrap the JavasScript code in the HTML? ",
        choices: ["1. <a> </a>", "2. <link> </link>", "3. <script> </script>", "4. <java> </java>"],
        rightAnswer: 2
    },

    {
        question: "What one is NOT a primitive or basic datatype of JavaScript?",
        choices: ["1. Python", "2. Strings", "3. Booleons", "4. Null"],
        rightAnswer: 0
    },

    {
        question: "What keyword is used to tell JavaScript you are declaring a variable?",
        choices: ["1. vrbl=", "2. vr:", "3. variable= ", "4. var "],
        rightAnswer:3
    },

    {
        question: "How can you differentiate a string and a number variable if they both include numerical values?",
        choices: ["1. They are interchangeable", "2. Quotation marks indicate a string", "3. the number is wirrten like twenty two", "4. You can't" ],
        rightAnswer:1
    },

    {
        question: "What number do you start with when counting values in JavaScript?",
        choices: ["1. 0", "2. 1", "3. You count by 2's", "4. 0.1 "],
        rightAnswer:0
    }
];


//Correct answers and responses
function checkAnswer (e) {

    let userChoice = e.target.value;
    console.log (userChoice)
    // alert (e.target.value);
    if (i === 0) {
        console.log (questionsArray[i].rightAnswer);
        if (userChoice == questionsArray[i].rightAnswer) {
            document.getElementById ("alertMessage").innerHTML = "Correct! This is the next question!";
            score++;
        } else {
            document.getElementById ('alertMessage') .innerHTML = "Incorrect!";
           timeCount -= 5;
           timeCountEl.textContent = timeCount;
        }
    }
    if (i === 1) {
        console.log (questionsArray[i].rightAnswer);
        if (userChoice == questionsArray[i].rightAnswer) {
            document.getElementById ("alertMessage").innerHTML = "Correct! This is the next question!";
            score++;
        } else {
            document.getElementById ('alertMessage') .innerHTML = "Incorrect!";
            timeCount -= 5;
           timeCountEl.textContent = timeCount;
        }
    }
    if (i === 2) {
        console.log (questionsArray[i].rightAnswer);
        if (userChoice == questionsArray[i].rightAnswer) {
            document.getElementById ("alertMessage").innerHTML = "Correct! This is the next question!";
            score++;
        } else {
            document.getElementById ('alertMessage') .innerHTML = "Incorrect!";
            timeCount -= 5;
           timeCountEl.textContent = timeCount;
        }
    }
    if (i === 3) {
        console.log (questionsArray[i].rightAnswer);
        if (userChoice == questionsArray[i].rightAnswer) {
            document.getElementById ("alertMessage").innerHTML = "Correct! This is the next question!";
            score++;
        } else {
            document.getElementById ('alertMessage') .innerHTML = "Incorrect!";
            timeCount -= 5;
           timeCountEl.textContent = timeCount;
        }
    }
    if (i === 4) {
        console.log (questionsArray[i].rightAnswer);
        if (userChoice == questionsArray[i].rightAnswer) {
            document.getElementById ("alertMessage").innerHTML = "Correct! ";
            score++;
        } else {
            document.getElementById ('alertMessage') .innerHTML = "Incorrect!";
            timeCount -= 5;
           timeCountEl.textContent = timeCount;
        }
    }
    i++;
    setQuestions ();

}

