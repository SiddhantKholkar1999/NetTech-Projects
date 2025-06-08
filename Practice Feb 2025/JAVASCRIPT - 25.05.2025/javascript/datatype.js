var str = 'string';
var str = "string";
var str = `string`;

var num = 19;
var num = 32.8;

var bool = true;

var arr = [1, 2, 3, 4];
var arr = [{ str: 'name' }, { number: 2 }, 3, 4];
var arr = [{ str: 'name' }, { number: 2 }];

var und = undefined;

var nul = null;

var sym = Symbol();

let num1 = 2;
let num2 = 3;
let num4 = "4";
let num5 = 4;

console.log(" Checking:", num1 == num2 - 1);

console.log(" Checking:", num4 === num5 - 1);
console.log(typeof num4);
console.log(typeof num5);

let flag1 = false;
console.log(flag1 !== true);

console.log(num1 == num2 - 1 && num4 == num5);
console.log(num1 == num2 - 1 || num4 != num5);

let flags = true;
console.log(" flags:", !flags);

// Bitwise Operators

// number to binary
let number = 42;
let binaryConv = number.toString(2);
console.log("binaryConv:", binaryConv);

// binary to number
let bin_to_num = parseInt(binaryConv, 2);
console.log("bin_To_num:", bin_to_num);

let name1 = "Siddhant";
let name2 = "Kholkar";

name1 += ' ' + name2;
console.log(' name1:', name1);
let ans = ` name1: ${name1}`;
console.log(ans);

// spread and rest operators
//spread
let array = [1,2,3,4];
let new_array = [...array, 5,6,7,8];
console.log(' new_array:',new_array);

//rest
const sum = (...args) => {
    console.log(' args:', args);
};
sum(1,2,3);

let num33 = 88;
console.log(' num33:',typeof num33);

let newData = num33.toString();
console.log(' newData:',newData);
console.log(' newData:',typeof newData);

let newData1 = String(num33);
console.log(' newData1:',newData1);
console.log(' newData1:',typeof newData1);

let newData2 = Number(newData1);
console.log(' newData2:',newData2);
console.log(' newData2:',typeof newData2);

let str2 = 'siddhantkholkar';
let ans22 = parseInt(str2);

console.log(' ans22:',ans22);

let flag = false;

if (!flag) {
    console.log(" flag:", `mai chal raha hoo ${flag}`);
} else {
    console.log(" flag:", `main nahi chalunga ${flag}`);
}