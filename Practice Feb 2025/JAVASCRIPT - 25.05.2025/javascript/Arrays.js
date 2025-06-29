// String Array
let arr = ['Mehfooz', 'Farhan', 'Hetuk', 'Khushi'];

// Object Array
let arr1 = [
    { name: 'mehfooz_khan', age: 88 },
    { name: 'khushi', age: 188 },
];

// Boolean Array
let arr2 = [false, true, false];

// Nested Array
let arr3 = [1, 2, 3, [4, 5, [6, 7, 8], [9, 10]]];

// Array of Arrays or Matrix
let arr4 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

console.log("String Array");
for (let i = 0; i < arr.length; i++) {
    console.log("| Relative Position : ",i+1,"| Actual Position : ",i,"| Elements : ",arr[i]);
}

console.log("Object Array");
for (let i = 0; i < arr1.length; i++) {
    console.log("| Relative Position : ",i+1,"| Actual Position : ",i,"| Elements : ",arr1[i]);
}

console.log("Boolean Array");
for (let i = 0; i < arr2.length; i++) {
    console.log("| Relative Position : ",i+1,"| Actual Position : ",i,"| Elements : ",arr2[i]);
}

console.log("Nested Array");
for (let i = 0; i < arr3.length; i++) {
    console.log("| Relative Position : ",i+1,"| Actual Position : ",i,"| Elements : ",arr3[i]);
}

console.log("Array of Arrays OR Matrix");
for (let i = 0; i < arr4.length; i++) {
    console.log("| Relative Position : ",i+1,"| Actual Position : ",i,"| Elements : ",arr4[i]);
}