const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let evenArr = [], oddArr = [];
console.log("EVEN OR ODD NUMBERS IN A RANGE");
readline.question('Enter Upper Limit of Range : ', (input1) => {
    if (Number.isNaN(parseFloat(input1)) == true) {
        console.log(`Given Input "${input1}" is not a Number`);
        readline.close();
    }
    else if (!Number.isInteger(parseFloat(input1)) || parseFloat(input1) < 0) {
        console.log(`Given Input "${input1}" is not a Whole Number`);
        readline.close();
    }
    else {
        readline.question('Enter Lower Limit of Range : ', (input2) => {
            if (Number.isNaN(parseFloat(input2)) == true) {
                console.log(`Given Input "${input2}" is not a Number`);
                readline.close();
            }
            else if (!Number.isInteger(parseFloat(input2)) || parseFloat(input2) < 0) {
                console.log(`Given Input "${input2}" is not a Whole Number`);
                readline.close();
            }
            else {
                console.log("Adding Numbers into ODD & EVEN ranges separately");
                if (parseFloat(input2) > parseFloat(input1)) {
                    console.log("Upper Limit Value must be greater than Lower Limit Value");
                    readline.close();
                } else {
                    for (let i = parseInt(input2); i <= parseInt(input1); i++) {
                        if (i % 2 == 0) {
                            evenArr.push(i);
                        } else {
                            oddArr.push(i);
                        }
                    }
                    console.log("Displaying EVEN range");
                    console.log("[");
                    for (let i = 0; i < evenArr.length; i++) {
                        console.log("\t",evenArr[i]);
                    }
                    console.log("]");
                    console.log("Displaying ODD range");
                    console.log("[");
                    for (let j = 0; j < oddArr.length; j++) {
                        console.log("\t",oddArr[j]);
                    }
                    console.log("]");
                    readline.close();
                }
            }
        });
    }
});