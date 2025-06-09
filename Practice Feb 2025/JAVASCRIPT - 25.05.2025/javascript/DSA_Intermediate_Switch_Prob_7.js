console.log("Traffic Light");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Hey Driver, tell me the signal color : ', (choice) => {
    console.log(`It's ${choice} Light`);
    trafficLight(choice.toUpperCase());
    readline.close();
});

function trafficLight(choice) {
    switch (choice) {
        case "RED": 
            console.log("Indication : STOP");
            console.log("Action : Please STOP the Vehicle");
            break;
        case "YELLOW":
            console.log("Indication : WAIT");
            console.log("Action : Please WAIT for the Signal to turn Green");
            break;
        case "GREEN": 
            console.log("Indication : GO");
            console.log("Action : Please GO ahead");
            break;
        default:
            console.log("NOT A TRAFFIC LIGHT COLOR");
    }
}

