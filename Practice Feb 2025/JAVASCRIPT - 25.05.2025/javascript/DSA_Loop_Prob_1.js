const { exit } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function menuDisplay() {
    console.log("Print Numbers From 1 to 10");
    console.log("1. Using For Loop");
    console.log("2. Using While Loop");
    console.log("3. Using Do-While Loop");
    console.log("4. Exit");
    readline.question('Choose the Option : ', (choice) => {
        console.log(`You have Chosen Option : ${choice}`);
        printNumbers(choice);
    });
}

function printNumbers(choice) {
    switch (choice) {
        case '1':
            console.log("FOR LOOP");
            console.log("Numbers from 1 to 10 using For Loop");
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
            menuDisplay();
            break;
        case '2':
            console.log("WHILE LOOP");
            console.log("Numbers from 1 to 10 using While Loop");
            let j = 1;
            while (j <= 10) {
                console.log(j);
                j++;
            }
            menuDisplay();
            break;
        case '3':
            console.log("DO-WHILE LOOP");
            console.log("Numbers from 1 to 10 using Do-While Loop");
            let k = 1;
            do {
                console.log(k);
                k++;
            } while (k <= 10);
            menuDisplay();
            break;
        case '4':
            console.log("EXIT");
            readline.close();
            exit();
        default:
            console.log("INVALID OPTION");
            menuDisplay();
    }
}

menuDisplay();
