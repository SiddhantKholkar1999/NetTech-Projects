let arr = [1, 2, 3, [4, 5, [6, 7, 8, [6, 7, 8]]]];

console.log("Given Array : ", arr);

//Using In-Built Functions
arr.flat(2);
console.log("Given Array using In-Built Function : ", arr);
// //Logic from Scratch
// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     arrNew.push(arr[i]);
//   }
//   for (let j = 0; j < arr[i].length; j++) {
//     if (typeof arr[i][j] === "number") {
//       arrNew.push(arr[i][j]);
//     }
//     for (let k = 0; k < arr[i][j].length; k++) {
//       arrNew.push(arr[i][j][k]);
//     }
//   }
// }
// console.log("Given Array using Logic : ", arrNew);

//Logic from Scratch using Recursion
let arrNew2 = [];
function flattenArray(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.isArray(inputArr[i])) {
      flattenArray(inputArr[i]);
    } else {
      arrNew2.push(inputArr[i]);
    }
  }
}

flattenArray(arr);

console.log("Given Array using Logic 2 : ", arrNew2);
