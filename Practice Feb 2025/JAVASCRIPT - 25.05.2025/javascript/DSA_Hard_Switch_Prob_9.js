const { exit } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let balance = 0.0;
function menuDisplay() {
    console.log("SIMPLE ATM SIMULATION");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Exit");
    readline.question('Choose the Option : ', (choice) => {
        console.log(`You have Chosen Option ${choice}`);
        monthDaysChecker(choice);
    });
}

function monthDaysChecker(choice) {
    switch (choice) {
        case '1':
            console.log("DEPOSIT");
            readline.question('Enter Amount : ', (amount) => {
                console.log("Previous Balance :",balance);
                console.log(`Amount Deposited : ${amount}`);
                balance += parseFloat(amount);
                console.log("Current Balance :",balance);
                // readline.close();
                menuDisplay();
            });
            break;
        case '2':
            console.log("WITHDRAW");
            if (balance <= 0) {
                console.log("No Amount on your Balance, Deposit First");
                menuDisplay();
            }
            else {
                readline.question('Enter Amount : ', (amount) => {
                    if (balance - amount <= 0) {
                        console.log(`Amount ${amount} cannot be withdrawn as Amount is more than your current balance ${balance}`);
                        menuDisplay();
                    } else {
                        console.log("Previous Balance :", balance);
                        console.log(`Amount Withdrawn : ${amount}`);
                        balance -= parseFloat(amount);
                        console.log("Current Balance :", balance);
                        menuDisplay();
                    }
                });
            }
            break;
        case '3':
            console.log("BALANCE CHECK");
            console.log("Current Balance :",balance);
            // readline.close();
            menuDisplay();
            // readline.question('Do you want to Check Balance (Y/N) : ', (ch) => {
            //     switch (ch.toUpperCase()) {
            //         case 'Y':
            //             console.log("Current Balance :",balance);
            //             break;
            //         case 'N':
            //             console.log("Ok. As you wish");
            //             break;
            //         default:
            //             console.log("Invalid Option");
            //     }
            //     readline.close();
            // });
            break;
        case '4':
            console.log("EXIT");
            readline.close();
            exit();
        default:
            console.log("Invalid Option");
            menuDisplay();
    }
}

menuDisplay();
