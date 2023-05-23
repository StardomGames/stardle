// Stardom related words of exactly 5 letters
const wordBank = ["ETHAN", "STARS", "AARON", "GAMES", "PIXEL", "ERICK", "PART1", "GREEN"];
const word = wordBank[Math.floor(Math.random() * wordBank.length)]; // Selects a random word from wordBank
let attempts = 0;
const maxAttempts = 6;
const input = document.getElementById("input");
const guesses = document.getElementById("guesses");
const message = document.getElementById("message");

document.getElementById("submit").addEventListener("click", () => {
    const guess = input.value.toUpperCase();

    // check if the guess is exactly 5 letters
    if (guess.length !== 5) {
        message.textContent = "Your guess must be exactly 5 letters!";
        return;
    }

    input.value = "";

    const guessDiv = document.createElement("div");
    guessDiv.classList.add("animate"); // Add animation

    for (let i = 0; i < word.length; i++) {
        const letterSpan = document.createElement("span");

        if (guess[i] === word[i]) {
            letterSpan.className = "correct";
        } else if (word.includes(guess[i])) {
            letterSpan.className = "incorrect-position";
        } else {
            letterSpan.className = "incorrect";
        }

        letterSpan.textContent = guess[i];
        guessDiv.appendChild(letterSpan);
    }

    guesses.appendChild(guessDiv);
    attempts++;

    if (guess === word) {
        message.textContent = "Congratulations! You've correctly guessed the word!";
        input.disabled = true;
        document.getElementById("submit").disabled = true;
    } else if (attempts === maxAttempts) {
        message.textContent = `You've reached the maximum attempts. The word was: ${word}`;
        input.disabled = true;
        document.getElementById("submit").disabled = true;
    }
});

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("submit").click();
    }
});
