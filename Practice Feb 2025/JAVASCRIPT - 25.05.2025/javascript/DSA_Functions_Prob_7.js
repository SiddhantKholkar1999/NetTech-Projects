let inputNum = 5;
factorialNumReturn = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
};

console.log("Input :",`${inputNum}!`);
console.log("Factorial :",factorialNumReturn(inputNum));