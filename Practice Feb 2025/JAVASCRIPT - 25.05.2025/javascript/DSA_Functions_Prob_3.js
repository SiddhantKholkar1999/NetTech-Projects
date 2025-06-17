let num1 = 60, num2 = 25, num3 = 45;
function largestNumReturn(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    }
    else if (b > c) {
        return b;
    }
    else {
        return c;
    }
}

console.log("Output :",largestNumReturn(num1,num2,num3));