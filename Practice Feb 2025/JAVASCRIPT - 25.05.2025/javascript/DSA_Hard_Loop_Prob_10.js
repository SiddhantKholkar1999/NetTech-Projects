const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let guess = 0;
console.log("NUMBER GUESSING GAME");
guess = Math.floor(Math.random() * 100);
// console.log(guess);

function guessNumber() {
    do {
        readline.question('Guess the Number \nEnter Number (1 to 100): ', (input) => {
            if (Number.isNaN(parseFloat(input))) {
                console.log(`User Number => ${input}`);
                console.log(".......");
                console.log(`Given Input "${input}" is not a Number`);
                guessNumber();
            }
            else if (!Number.isInteger(parseFloat(input))) {
                console.log(`User Number => ${input}`);
                console.log(".......");
                console.log(`Given Input "${input}" is not a Whole or Natural Number`);
                guessNumber();
            }
            else if (parseInt(input) < 0 || parseInt(input) > 100) {
                console.log(`User Number => ${input}`);
                console.log(".......");
                console.log(`Given Input "${input}" is out of Range`);
                guessNumber();
            }
            else if (Math.abs(parseInt(input)) != guess) {
                console.log(`User Number => ${input}`);
                console.log(".......");
                console.log(`Incorrect Guess, ${input < guess ? "TOO LOW":"TOO HIGH"}`);
                guessNumber();
            }
            else {
                console.log(`User Number => ${input}`);
                console.log(".......");
                console.log("You guessed the Right Number");
                readline.close();
            }
        });
        break;
    } while (true);
}

guessNumber();