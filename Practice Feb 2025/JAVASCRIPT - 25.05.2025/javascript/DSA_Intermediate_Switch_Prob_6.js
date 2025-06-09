console.log("Month Days Checker");
console.log("1. January");
console.log("2. February");
console.log("3. March");
console.log("4. April");
console.log("5. May");
console.log("6. June");
console.log("7. July");
console.log("8. August");
console.log("9. September");
console.log("10. October");
console.log("11. November");
console.log("12. December");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Choose the Month : ', (choice) => {
    console.log(`You have Chosen Month no. ${choice}`);
    monthDaysChecker(choice);
    readline.close();
});

// let num1 = process.argv[2];
// let num2 = process.argv[3];
// let choice = process.argv[4];

function monthDaysChecker(choice) {
    switch (choice) {
        case '1': case '3': case '5': case '7': case '8': case '10': case '12': 
            console.log("There are 31 days");
            break;
        case '2':
            console.log("Calculating Leap Year.....");
            let div1 = 4, div2 = 100, div3 = 400, rem1 = 0, rem2 = 0, rem3 = 0;
            const year = new Date().getFullYear();
            console.log("Current Year : ", year);
            let temp = year;
            rem1 = temp % div1;
            rem2 = temp % div2;
            rem3 = temp % div3;
            if (rem1 == 0 || rem2 == 0 || rem3 == 0) {
                console.log("Since Current Year",year,"is a Leap Year so there are 29 days");
            } else {
                console.log("There are 28 days");
            }
            break;
        case '4': case '6': case '9': case '11': 
            console.log("There are 30 days");
            break;
        default:
            console.log("Not a Valid Option");
    }
}

