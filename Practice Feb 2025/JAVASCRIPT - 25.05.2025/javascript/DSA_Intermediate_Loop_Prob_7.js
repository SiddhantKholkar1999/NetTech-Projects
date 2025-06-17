const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let temp = 0, digit = 0, cnt = 0;
console.log("COUNT THE DIGITS OF A NUMBER");
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
        console.log("Finding No. of Digits of Given Number");
        for (temp = Math.abs(parseInt(input)); temp > 0; temp = parseInt(temp / 10)) {
            digit = temp % 10;
            if (digit != 0) {
                cnt++;
            }
        }
        console.log(`Count of Digits of Number ${input} : ${cnt}`);
    }
    readline.close();
});