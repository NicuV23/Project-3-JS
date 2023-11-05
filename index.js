// The words for the game
const words = ["javascript", "advanced", "everest", "programming", "chemistry", "github", "frontend"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = new Array(selectedWord.length).fill("_");
let wrongLetters = [];
let guessesLeft = 11;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Generating the buttons for each letter
let alphabetButtons = '';
for (let i = 0; i < alphabet.length; i++) {
    alphabetButtons += `<button id="btn_${alphabet[i]}" onclick="checkLetter('${alphabet[i]}')">${alphabet[i]}</button>`;
}
document.getElementById('alphabet').innerHTML = alphabetButtons;

// The function for checking the guess of the letter
function checkLetter(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        if (!guessedWord.includes("_")) {
            alert("Congratulations! You guessed the word: " + selectedWord);
            resetGame();
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
        document.getElementById("guesses").innerText = guessesLeft;

        // Change the image
        if (guessesLeft > 0 && guessesLeft < 12) {
            document.getElementById('hangmanImage').src = `image${11 - guessesLeft + 1}.jpg`;
        }

        if (guessesLeft === 0) {
            alert("You lost! The word was: " + selectedWord);
            resetGame();
        }
    }
    document.getElementById("wordDisplay").innerText = guessedWord.join(" ");

    // Remove button reset after using
    let button = document.getElementById(`btn_${letter}`);
    button.style.display = 'none';
}

// Function for the reset
function resetGame() {
    location.reload();
}

// Initializing the game
document.getElementById("wordDisplay").innerText = guessedWord.join(" ");
