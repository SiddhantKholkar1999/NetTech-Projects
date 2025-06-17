const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let prime = 1, high = 0, low = 0;
console.log("PRIME NUMBER CHECKER");

readline.question('Enter Number : ', (input) => {
    if (Number.isNaN(parseFloat(input))) {
        console.log(`User Number => ${input}`);
        console.log(".......");
        console.log(`Given Input "${input}" is not a Number`);
    }
    else if (!Number.isInteger(parseFloat(input))) {
        console.log(`User Number => ${input}`);
        console.log(".......");
        console.log(`Given Input "${input}" is not a Whole or Natural Number`);
    }
    else {
        console.log(`User Number => ${input}`);
        console.log(".......");
        for (let i = 1; i < array.length; i++) {
            const element = array[i];
            
        }
        console.log("You guessed the Right Number");
        readline.close();
    }
});

function guessNumber() {
    do {
        readline.question('Enter Number : ', (input) => {
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