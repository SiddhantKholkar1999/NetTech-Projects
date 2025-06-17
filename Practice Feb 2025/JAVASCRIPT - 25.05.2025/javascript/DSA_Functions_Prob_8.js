let inputStr = "Hello";
countVowels = (inputStr) => {
    let cnt = 0;
    for (let i = 0; i < inputStr.length; i++) {
        switch (inputStr.charAt(i).toLowerCase()) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                cnt++;
            default:
        }
    }
    return cnt;
};

console.log("Input :",`${inputStr}`);
console.log("Output (Vowels Count) :",countVowels(inputStr));