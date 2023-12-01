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

const startBtn = document.querySelector(".start");
startBtn.addEventListener('click', function() {
    alert ('hello');
});