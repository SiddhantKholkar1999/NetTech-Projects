let stringInputVal = "world";
reverseStringReturn = (stringVal) => {
    let tempStr = [], stringOutputVal = "", temp = "";
    tempStr = stringVal.split('');
    for (let i = 0, j=tempStr.length-1; i < tempStr.length, j>0; i++,j--) {
        temp = tempStr[j];
        tempStr[j] = tempStr[i];
        tempStr[i] = temp;
    }
    stringOutputVal = tempStr.join('').toString().replace(',','');
    return stringOutputVal;
};

console.log("Input :", stringInputVal);
console.log("Output :",reverseStringReturn(stringInputVal));

