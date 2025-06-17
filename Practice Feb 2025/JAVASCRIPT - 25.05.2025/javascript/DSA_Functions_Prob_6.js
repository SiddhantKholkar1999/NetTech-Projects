let inputNumArr = [1,2,3,4];
sumNumArray = (numArr) => {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum;
};

console.log("Input :", inputNumArr);
console.log("Sum :",sumNumArray(inputNumArr));