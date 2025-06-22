const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
console.log("FIBONACCI SERIES GENERATOR");

readline.question('Enter Number of Terms : ', (input) => {
    if (Number.isNaN(parseFloat(input))) {
        console.log(`User Input => ${input}`);
        console.log(".......");
        console.log(`Given Input "${input}" is not a Number`);
        readline.close();
    }
    else if (!Number.isInteger(parseFloat(input))) {
        console.log(`User Input => ${input}`);
        console.log(".......");
        console.log(`Given Input "${input}" is not a Whole or Natural Number`);
        readline.close();
    }
    else {
        console.log(`User Input => ${input}`);
        console.log(".......");
        console.log("In Recursive Mode");
        function fibonacci(num) {
            if (num <= 1)
                return num;
            return fibonacci(num - 1) + fibonacci(num - 2);
        }
        for (let i = 0; i < parseInt(input); i++) {
            console.log(fibonacci(i));
        }
        console.log("In Non Recursive Mode");
        let a = 0, b = 1, temp;
        for (let i = 0; i < parseInt(input); i++) {
            console.log(a);
            temp = a;
            a = b;
            b = temp + a;
        }
        readline.close();
    }
});