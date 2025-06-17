const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("MULTIPLICATION TABLE");
readline.question('Enter Number : ', (input) => {
    if (Number.isNaN(parseFloat(input)) == true) {
        console.log(`Given Input "${input}" is not a Number hence Multiplication Table cannot be generated`);
    } else {
        console.log(`${input} times table`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${input} X ${i} = ${input*i}`);
        }
    }
    readline.close();
});