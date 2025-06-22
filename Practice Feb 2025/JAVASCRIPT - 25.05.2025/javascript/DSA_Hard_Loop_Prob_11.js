const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let prime = 0;
console.log("PRIME NUMBER CHECKER");

readline.question('Enter Number : ', (input) => {
    if (Number.isNaN(parseFloat(input))) {
        console.log(`User Number => ${input}`);
        console.log(".......");
        console.log(`Given Input "${input}" is not a Number`);
        readline.close();
    }
    else if (!Number.isInteger(parseFloat(input))) {
        console.log(`User Number => ${input}`);
        console.log(".......");
        console.log(`Given Input "${input}" is not a Whole or Natural Number`);
        readline.close();
    }
    else {
        console.log(`User Number => ${input}`);
        console.log(".......");
        for (let i = 1; i < parseInt(input); i++) {
            if (parseInt(input)%i==0)
                prime++;
        }
        console.log("prime : ",prime);
        if (prime == 1) {
            console.log("It's a prime number");
        } else {
            console.log("It's not a prime number");
        }
        readline.close();
    }
});