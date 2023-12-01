// high score array, with objects 

const highscores = [
    {
        initial: 'BB',
        score: 58, 
    }

];

const highscoresfromstorage = localStorage.getItem('highscores'); // string array of objects 


// if high score from storage 
highscoresfromstorage = [
]

const newScore = {
    initial: document.getElementById('initials').values, // initials from inputs
    score: timeRemaining, 
}


highscoresfromstorage.push(newScore);

// highscoresFromStorage = {
    {
        initial: 'BB',
        score: 58, 
    }, 
    {
        initial: 'CC', 
        score: 15 
    }
}