// Cuvinte pentru jocul spanzuratoarea
const words = ["javascript", "html", "css", "programming", "math", "github", "frontend"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = new Array(selectedWord.length).fill("_");
let wrongLetters = [];
let guessesLeft = 6;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Generare butoane pentru fiecare litera
let alphabetButtons = '';
for (let i = 0; i < alphabet.length; i++) {
    alphabetButtons += `<button id="btn_${alphabet[i]}" onclick="checkLetter('${alphabet[i]}')">${alphabet[i]}</button>`;
}
document.getElementById('alphabet').innerHTML = alphabetButtons;

// Functia pentru verificarea ghicirii literei
function checkLetter(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        if (!guessedWord.includes("_")) {
            alert("Felicitari! Ai ghicit cuvantul " + selectedWord);
            resetGame();
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
        document.getElementById("guesses").innerText = guessesLeft;
        if (guessesLeft === 0) {
            alert("Ai pierdut! Cuvantul era: " + selectedWord);
            resetGame();
        }
    }
    document.getElementById("wordDisplay").innerText = guessedWord.join(" ");

    // Eliminare buton dupa ce a fost apasat
    let button = document.getElementById(`btn_${letter}`);
    button.style.display = 'none';
}

// Functie pentru resetarea jocului
function resetGame() {
    location.reload();
}

// Initializare joc
document.getElementById("wordDisplay").innerText = guessedWord.join(" ");
