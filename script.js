// Defines an array (list) containing various chess facts as strings
const chessFacts = [
    // Fact 1
    "The longest chess game theoretically possible is 5,949 moves.",
    // Fact 2
    "The word 'Checkmate' comes from the Persian phrase 'Shah Mat', meaning 'the King is dead'.",
    // Fact 3
    "The folding chess board was invented by a priest who was forbidden to play chess.",
    // Fact 4
    "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
    // Fact 5
    "The second book ever printed in the English language was about chess.",
    // Fact 6
    "A computer called Deep Thought became the first computer to beat a grandmaster in 1988.",
    // Fact 7
    "The Queen was originally a weak piece that could only move one square diagonally.",
    // Fact 8
    "Dr. Emanuel Lasker retained the World Chess Champion title for 27 years, the longest reign ever.",
    // Fact 9
    "The number of possibilities of a Knight's tour is over 122 million."
// Closes the array definition
];

// Selects the HTML element where the fact will be displayed using its ID
const factDisplay = document.getElementById('fact-display');

// Selects the button element using its ID
const newFactBtn = document.getElementById('new-fact-btn');

// Defines a function to generate and display a random fact
function generateFact() {
    // Calculates a random index number between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * chessFacts.length);
    
    // Retrieves the fact string from the array using the random index
    const randomFact = chessFacts[randomIndex];
    
    // Updates the text content of the display element with the new fact
    factDisplay.textContent = randomFact;
// Closes the function definition
}

// Adds an event listener to the button to listen for 'click' events
newFactBtn.addEventListener('click', generateFact);

// Calls the function immediately when the page loads so the user doesn't see empty space
generateFact();
