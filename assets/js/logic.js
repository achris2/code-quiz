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
const highScores = [];

// initialising question index 
let currentQuestionIndex = 0;     
let timeLeft = 100; // set initial timer
let score = 100; 

// event listener for start button 

startBtn.addEventListener('click', function() {
    // Update the timer 
    timerEl.textContent = timeLeft; 
    // Update the countdown every second 
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown(){
        if (timeLeft >= 0) {
        timeLeft --;
        } else if (timeLeft <= 0 || currentQuestionIndex < myQuestions.length) {
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
                checkAnswer(this.textContent);
            });
            questionChoices.appendChild(choiceButton);
        }
    }
}

function checkAnswer(selectedAnswer){
    // pulls current question from questions object 
    const currentQuestion = myQuestions[currentQuestionIndex];
    // check if selected answer is right or wrong 
    if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswer]){
        alert ('the answer is correct!')
    } else {
        // if answer is incorrect, subtract 10 seconds from time left; 
        alert ('sorry, the answer is wrong, 10 seconds deducted')
        timeLeft -= 10; 
        score -= 10; 
        // so it doesn't show negative time 
        if (timeLeft<0){
            timeLeft = 0;
        }
    }
    // go through next question 
    currentQuestionIndex++; 

    // check if there are any more quesitons 
    if (currentQuestionIndex < myQuestions.length){
        showQuestion();
    } else {
        // end the quiz 
        endQuiz();
    }
}
// addScore 
            function addScore(initials, score) {
                const newScore = {
                    initial: initials,
                    score: score,
                }
                                // add new score to the highScores array
                                highScores.push(newScore);    
                                // Save highScores array to local storage
                                localStorage.setItem('highScores', JSON.stringify(highScores)); 
            }

        
            

function endQuiz(){
    // hide questions container 
    questionContainer.style.display = null; 

    // stop timer
    timerEl.textContent = score; 
    
    
    // display end screen
    endScreen.style.display = "block";

    // display final score 
    finalScore.textContent = score;
}
    // submit initials and score 
    submitBtn.addEventListener("click", function () {
        const initials = initialsInput.value.trim();
    
        if (initials !== "") {
            // Define newScore within the if block
            const newScore = {
                initial: initials,
                score: score,
            };
            console.log(localStorage);
            addScore(newScore);
            console.log(newScore);
                // add new score to the highScores array
            highScores.push(newScore);    
            // Save highScores array to local storage
            localStorage.setItem('newScore', JSON.stringify(newScore));
    //   redirect to high scores page 
        window.location.href = 'highscores.html'
    }
        })