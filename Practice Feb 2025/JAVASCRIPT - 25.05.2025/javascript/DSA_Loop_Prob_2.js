const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("SUM OF FIRST 'N' NATURAL NUMBERS");
readline.question('Enter Natural Number (Starting from 1) : ', (input) => {
    if (Number.isInteger(parseFloat(input)) && parseFloat(input) > 0) {
        console.log(`Number Entered : ${input}`);    
        let sum = 0;
        for (let i = 1; i <= parseInt(input); i++)
            sum += i;
        console.log(`Sum of First ${input} Natural Number is`, sum);
    } else {
        console.log(`Entered Input ${input} is not a Natural Number`);
    }
    readline.close();
});