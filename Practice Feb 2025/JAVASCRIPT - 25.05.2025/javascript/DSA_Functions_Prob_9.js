let inputNum = 17;
checkPrimeNum = (inputNumVal) => {
    let cnt = 0;
    for (let i = 2; i < inputNumVal; i++) {
        if (inputNumVal % i == 0) {
            cnt++;
        }
    }
    return cnt == 0 ? true : false;
};

console.log("Input :",`${inputNum}`);
console.log(`${checkPrimeNum(inputNum) ? "It's a Prime Number" : "It's not a Prime Number"}`);