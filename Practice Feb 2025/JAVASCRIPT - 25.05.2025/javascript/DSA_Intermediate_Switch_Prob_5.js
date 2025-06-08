console.log("Menu-Driven Program");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");
console.log("5. Exit");

let num1 = process.argv[2];
let num2 = process.argv[3];
let choice = process.argv[4];

simpleCalculator(num1,num2,choice);

function simpleCalculator(num1,num2,operator) {
    switch (operator) {
        case '1':
            console.log("Addition is performed");
            console.log(num1," + ",num2," = ",num1 + num2);
            break;
        case '2':
            console.log("Subtraction is performed");
            console.log(num1," - ",num2," = ",num1 - num2);
            break;
        case '3':
            console.log("Multiplication is performed");
            console.log(num1," X ",num2," = ",num1 * num2);
            break;
        case '4':
            console.log("Division is performed");
            if (num2 == 0) {
                console.log("Not Defined since number cannot be divided by 0");
            } else {
                result = num1 / num2
                console.log(num1," / ",num2," = ",num1 / num2); 
            }
            break;
        case '5':
            console.log("Exited Successfully");
            exit();
        default:
            console.log("Not a Valid Option");
    }
}

