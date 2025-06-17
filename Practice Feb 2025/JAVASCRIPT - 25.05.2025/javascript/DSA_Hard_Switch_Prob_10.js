const { exit } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function menuDisplay() {
    console.log("TEMPERATURE CONVERTER");
    console.log("1. Celsius to Fahrenheit");
    console.log("2. Fahrenheit to Celsius");
    console.log("3. Exit");
    readline.question('Choose the Option : ', (choice) => {
        console.log(`You have Chosen Option ${choice}`);
        temperatureConverter(choice);
    });
}

function temperatureConverter(choice) {
    switch (choice) {
        case '1':
            console.log("CELSIUS TO FAHRENHEIT");
            readline.question('Enter temperature in Celsius (C) : ', (temperature) => {
                console.log("OUTPUT");
                console.log(`Temperature in Celsius (C) : ${temperature} C`);
                temperature = temperature * (9 / 5) + 32;
                console.log(`Temperature in Fahrenheit (F) : ${temperature} F`);
                menuDisplay();
            });
            break;
        case '2':
            console.log("FAHRENHEIT TO CELSIUS");
            readline.question('Enter temperature in Fahrenheit (F) : ', (temperature) => {
                console.log("OUTPUT");
                console.log(`Temperature in Fahrenheit (F) : ${temperature} F`);
                temperature = (temperature - 32) * (5 / 9);
                console.log(`Temperature in Celsius (C) : ${temperature} C`);
                menuDisplay();
            });
            break;
        case '3':
            console.log("EXIT");
            readline.close();
            exit();
        default:
            console.log("Invalid Option");
            menuDisplay();
    }
}

menuDisplay();
