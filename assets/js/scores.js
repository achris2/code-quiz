// initialise high scores 

const highScores = [
    {
        initial: 'AB',
        score: 100, 
    },
    {
        initial: 'BC',
        score: 80, 
    },
    {
        initial: 'CD',
        score: 22, 
    },
];

// // Retrieve high scores from local storage
const newScore = JSON.parse(localStorage.getItem('newScore'));
highScores.push(newScore);


// DOM Elements
const highScoresList = document.getElementById('highscores');
const clearBtn = document.getElementById('clear');

// Function to render high scores
function renderHighScores() {
    // Clear existing list
    highScoresList.innerHTML = '';

    // Sort high scores in descending order
    const sortedScores = [...highScores].sort((a, b) => b.score - a.score);

    // Loop through high scores and create list items
    sortedScores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${score.initial} - ${score.score}`;
        highScoresList.appendChild(listItem);
    });
}

// Function to clear high scores
function clearHighScores() {
    // Clear high scores from local storage and array
    localStorage.removeItem('highScores');
    highScores.length = 0;
    // Render the updated high scores list
    renderHighScores();
}

// Event listener for clear button
clearBtn.addEventListener('click', clearHighScores);

// Event listener for window load to render initial high scores
window.addEventListener('load', renderHighScores);
