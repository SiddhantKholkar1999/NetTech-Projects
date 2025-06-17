const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let Factorial = 1;
console.log("FACTORIAL OF A NUMBER");
readline.question('Enter Number : ', (input) => {
    if (Number.isNaN(parseFloat(input)) == true) {
        console.log(`Given Input "${input}" is not a Number`);
        readline.close();
    }
    else if (!Number.isInteger(parseFloat(input))) {
        console.log(`Given Input "${input}" is not a Whole or Natural Number`);
        readline.close();
    }
    else if (parseFloat(input) < 0) {
        console.log("Finding Factorial of Given Number when negative");
        for (let i = parseInt(input)*(-1); i >= 1; i--)
            Factorial *= i;
        parseInt(input) % 2 == 0 ? console.log(`${input}! = ${Factorial}`) : console.log(`${input}! = ${Factorial*(-1)}`);
        // if (parseInt(input) % 2 == 0) 
        //     console.log(`${input}! = ${Factorial}`);
        // else 
        //     console.log(`${input}! = ${Factorial*(-1)}`);
    }
    else {
        console.log("Finding Factorial of Given Number");
        for (let i = parseInt(input); i >= 1; i--)
            Factorial *= i;
        console.log(`${input}! = ${Factorial}`);
    }
    readline.close();
});