const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let temp = 0, rem = 0, rev = 0;
console.log("PALINDROME CHECKER");
readline.question('Enter Number : ', (input) => {
    if (Number.isNaN(parseFloat(input))) {
        console.log(`Given Input "${input}" is not a Number`);
        readline.close();
    }
    else if (!Number.isInteger(parseFloat(input))) {
        console.log(`Given Input "${input}" is not a Whole or Natural Number`);
        readline.close();
    }
    else {
        console.log(`Original Number => ${input}`);
        temp = Math.abs(parseInt(input));
        while (temp > 0) {
            rem = temp % 10;
            rev = rev*10 + rem;
            temp = parseInt(temp / 10);
        }
        console.log(`Reversed Number => ${rev}`);
        parseInt(input) == rev ? console.log("Given Number is Palindrome Number") : console.log("Given Number is Not a Palindrome Number");
    }
    readline.close();
});