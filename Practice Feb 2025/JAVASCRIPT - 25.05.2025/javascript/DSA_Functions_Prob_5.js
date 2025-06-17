let stringInputVal = "madame";
checkPalindromeString = (stringVal) => {
    let tempStr = [], stringOutputVal = "", temp = "";
    tempStr = stringVal.split('');
    for (let i = 0, j=tempStr.length-1; i < tempStr.length, j>0; i++,j--) {
        temp = tempStr[j];
        tempStr[j] = tempStr[i];
        tempStr[i] = temp;
    }
    stringOutputVal = tempStr.join('').toString().replace(',', '');
    console.log("Output :",stringOutputVal);
    return stringOutputVal==stringVal ? true : false;
};

console.log("Input :", stringInputVal);
console.log(`${checkPalindromeString(stringInputVal) ? "It's Palindrome String" : "Not a Palindrome String"}`);