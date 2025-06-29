//HOF stands for Higher Order Function
let array = [1, 2, 3, 4, 7, 6, 7, 6, 9];

let string = ['Mehfooz', 'Hetuk', 'Farhan', 'Khushi'];

//map()
//# map same as loop but it will return as array

let arr = string.map((element, index) => {
    return element !== 'Mehfooz';
});
console.log('-> arr:',arr);

//filter()
//# filter same as loop but it will return as array but delete/remove the match elements

let arr1 = array.filter((element, index) => {
    return element !== 7;
});
console.log('-> arr1:',arr1);

//forEach()
//# forEach same as loop but it will never return as array, it shows 'undefined'

let arr2 = array.forEach((element) => {
    console.log(element);
    return element;
});
console.log('-> arr2:', arr2);

//reduce()
//reduce returns reduced array
// Here 'acc' means initial value at initial position of array
// Here 'curr' means current value of array regardless of position
let answer = array.reduce((acc, curr) => acc + curr);
console.log('-> answer:', answer);

// HOF: creates a reducer for summing a property
const createSumReducer = (prop) => {
    return (acc, obj) => acc + obj[prop];
};

const items = [
    { name: 'Book', price: 300 },
    { name: 'Pen', price: 50 },
    { name: 'Notebook', price: 150 },
];

const totalPrice = items.reduce(createSumReducer('price'), 0);
console.log(totalPrice);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(countFruits);