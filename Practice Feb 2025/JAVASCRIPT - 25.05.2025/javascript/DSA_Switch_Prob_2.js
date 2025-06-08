let num1 = process.argv[2];
let num2 = process.argv[3];
let operator = process.argv[4];

simpleCalculator(num1,num2,operator);

function simpleCalculator(num1,num2,operator) {
    switch (operator) {
        case '+':
            console.log("Addition is performed");
            console.log(num1," + ",num2," = ",num1 + num2);
            break;
        case '-':
            console.log("Subtraction is performed");
            console.log(num1," - ",num2," = ",num1 - num2);
            break;
        case '*':
            console.log("Multiplication is performed");
            console.log(num1," X ",num2," = ",num1 * num2);
            break;
        case '/':
            console.log("Division is performed");
            if (num2 == 0) {
                console.log("Not Defined since number cannot be divided by 0");
            } else {
                result = num1 / num2
                console.log(num1," / ",num2," = ",num1 / num2); 
            }
            break;
        default:
            console.log("Not a Valid Operator hence no operation performed");
    }
}

