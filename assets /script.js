//Global variables 
var timer = document.getElementById("timer");
var timeCountEl = document.getElementById("timeCount");
var startButton = document.getElementById("startButton");
var gameEnd = document.getElementById("gameEnd");
var initials = document.getElementById("initials");
var enterInitials = document.getElementById("enterInitials");
var submitInitialsBtn = document.getElementById("submitInitials");
var highScoresContainer = document.getElementById("highScoresContainer");
//var highScores = document.getElementById("highScores");
var backHome = document.getElementById("backHome");
var questionOptions = document.getElementById("questionOptions");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var score = document.getElementById("score");
var questionsDivEl = document.getElementById("answersContainer");
var highScores = [];
var initialsInput=[];
var score= 0;
let i=0; // i is the Question Number
var timeCount = 60;
var timerEl;


   //welcome page display
    function welcome() {
    instructions.style.display = "block";
    document.getElementById("title").style.display = "block";
    questionsDivEl.style.display = "none";
    document.getElementById ("gameEnd").style.display = "none";
    document.getElementById ("highScoresContainer").style.display = "none";
    document.getElementById ("initials").style.display = "none";
    document.getElementById ("timer").style.display = "none";

    }
//activate welcome page display
    welcome();

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

//start game
startButton.addEventListener("click", function(event){
    timerEl = setInterval(setStartTime, 1000);
    setQuestions();
    timeCountEl.textContent = timeCount;
    instructions.style.display = "none";
    questionsDivEl.style.display = "block";
    document.getElementById("title").style.display = "none";
    document.getElementById ("timer").style.display = "block";
})

//timer
function setStartTime() {
timeCount--;
timeCountEl.textContent = timeCount;
if (timeCount <= 0) {
    clearInterval (timeCount);
    quizDone();
    timeCount =0;
}
}

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
    setQuestions();
}

//to move to next question
answerA.addEventListener ("click", checkAnswer);
answerB.addEventListener ("click", checkAnswer);
answerC.addEventListener ("click", checkAnswer);
answerD.addEventListener ("click", checkAnswer);

//finish at the 5th question
function setQuestions() {
    
    if (i === 5) {
        quizDone();
        document.getElementById ("score").innerHTML = `${score}`;
        console.log(`${score}`);

    } else {
        questionOptions.textContent = questionsArray[i].question;
        document.getElementById ("answerA").textContent = questionsArray[i].choices[0];
        document.getElementById ("answerB").textContent = questionsArray[i].choices[1];
        document.getElementById ("answerC").textContent = questionsArray[i].choices[2];
        document.getElementById ("answerD").textContent = questionsArray[i].choices[3];
   }
 
};

//When quiz is done, show score, enter initials 
function quizDone(){
    clearInterval(timerEl);
    questionsDivEl.style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("highScoresContainer").style.display = "none";
    document.getElementById("gameEnd").style.display = "block";
    document.getElementById("alertMessage").style.display = "none";
    document.getElementById("initials").style.display = "block";
    }

    //function submitScore() {
        submitInitialsBtn.addEventListener("click", function(event){
            console.log(enterInitials.value);
        document.getElementById("initials").style.display = "none";
        document.getElementById("gameEnd").style.display = "none";
       document.getElementById ("highScoresContainer").style.display = "block";
    })

//refresh when clear is clicked
function refreshPage(){window.location.reload();
} 

//back home button
backHome.addEventListener("click", function(event){
clear();
welcome();

})
//reset game to play again
function clear() {
    timeCount=60;
    setStartTime();
    score=0;
    i=0
}




// function highscores() {
//     var storedScores = JSON.parse(localStorage.getItem `${score}`);
// }
