// start button that when clicked a timer starts and the first question appears
// questions contain buttons for each answer
// when answer is clicked, the next question appears
// if the answer clicked was incorrect. then subtract time from the clock (say, 10s)
// the quiz ends whena ll questions are answered or the timer reachers 0
// when the game ends, it should display their score and give the user the ability to save their initials and their score


// Steps 
// index.html 
// Define the questions and the choices & the answers 
// 4 questions, 4 choices each, 1 correct answer 
// Timer -> add click event listener to 'start quiz' and trigger the timer 
// Display first question -> add click event listener to "start quiz button" and display 1st questions
// ---- Note that there is a hide class in the Divs 'questions' and 'end-screen'
// ---- when you click ' start button' you need to populate the div 'questions'
// ---- you then need to add 'hide' class to 'start'
// ----- show questions screen 
// --- add click event listener to the choices div and check if the choice button is clicked 
// --- 

// highscore.html
// retrieve high score from local storage 
// display high score as a list 
// sort the scores from hgiher score to lower score 



// start button that when clicked a timer starts and the first question appears


// DOM Elements 
const timerEl = document.getElementById ("time");
const startScreen = document.getElementById("start-screen");
const startBtn = document.querySelector(".start");
const questionContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const questionChoices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitBtn = document.getElementById("submit");

// initialising question index 
let currentQuestionIndex = 0;     
let timeLeft = 2; // set initial timer
let score = 0; 

// event listener for start button 

startBtn.addEventListener('click', function() {
    // Update the timer 
    timerEl.textContent = timeLeft; 
    // Update the countdown every second 
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown(){
        if (timeLeft >= 0) {
        timeLeft --;
        } else {
                 // else, if timeLeft = 0, end the quiz
                 clearInterval(countdownInterval); 
                 endQuiz();
        }
        // update timer display 
        timerEl.textContent = timeLeft;
    }

    // hide home screen
    startScreen.classList.add('hide');

    // change question container from 'null' to display block
    questionContainer.style.display = "block";

    // display the 1st question 
    showQuestion ();
}
);


function showQuestion (){ 
    // get the current question 
    const currentQuestion = myQuestions[currentQuestionIndex];
    // update question title 
    questionTitle.textContent = currentQuestion.question;
    
    // clear previous choices 
    questionChoices.innerHTML = "";

    // loop through choices and create buttons 

    for (const key in currentQuestion.answers){
        if (currentQuestion.answers.hasOwnProperty(key)) {
            const choiceButton = document.createElement("button");
            choiceButton.textContent = currentQuestion.answers[key];
            choiceButton.addEventListener("click", function(){
                // event listener for the click when user chooses answer
                checkanswer(this.textContent);
            });
            questionChoices.appendChild(choiceButton);
        }
    }
}

function endQuiz(){
    // hide questions container 
    questionContainer.style.display = null; 
    
    // display end screen
    endScreen.style.display = "block";

    // display final score 

    
    submitBtn.addEventListener("click",function(){

    })
}



// // check if there are questiosn to display or if the time has run out 
// if (currentQuestionIndex < myQuestions.length && timeLeft > 0){

   
    

//     // update question choices 

//     } else if (timeLeft === 0 || currentQuestionIndex === myQuestions.length){

//     }
