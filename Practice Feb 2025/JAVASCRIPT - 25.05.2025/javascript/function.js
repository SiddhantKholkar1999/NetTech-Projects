// functions
// !=> Basic Nature of function is to return the value, 
// !=> if we do not specify return value explicitly to the function, 
// !then by default function returns the value as undefined implicitly

function sum() {
    console.log(2 + 4);
}

let x = sum();
console.log("x :", x);

function sub() {
    return 2 - 4;
}

let y = sub();
console.log("y :", y);

let num1 = 7
let num2 = 8
let num3 = 9

function mul(a, b, c) {
    return a * b + c;
}

let ans = mul(num1, num2, num3);
console.log("ans :", ans);

//demo - 2 => Function Hoisting

let food = 'biryani-veg';
khushi(food);

function khushi(value) {
    hetuk(value);    
}

function hetuk(value) {
    nishad(value);    
}

function nishad(value) {
    farhan(value);    
}

function farhan(value) {
    console.log('value from farhan :',value);
}

function blockScope() {
    let names = 'Mehfooz';
    console.log('this is my name :',names);
}

blockScope();
// console.log('this is my name :', names);

// Arrow Function
let stringConcatenation = () => {
    console.log(2 + 2);
};
stringConcatenation();
