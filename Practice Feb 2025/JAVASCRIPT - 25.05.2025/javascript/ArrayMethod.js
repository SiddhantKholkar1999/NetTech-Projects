console.log("ARRAY METHODS");
let array = [1, 3, 3, 4, 5];
console.log("-> array:",array);
//Pop
console.log("1. POP");
array.pop();
console.log("-> array:",array);
//Push
console.log("2. PUSH");
array.push(6, 7, 8, 9, 10, 2, 4, 2);
console.log("-> array:", array);
//Slice
console.log("3. SLICE");
let ans = array.slice(1,4);
console.log("-> ans:",ans);
console.log("-> array:", array);
//Splice
console.log("4. SPLICE");
let ans2 = array.splice(1, 2);
console.log("-> ans2:",ans2);
console.log("-> array:", array);
//Sort
console.log("5. SORT");
console.log("-> array:", array);
console.log("ASCENDING ORDER");
array.sort((a, b) => a - b);
console.log("-> array:", array);
console.log("DESCENDING ORDER");
array.sort((a, b) => b - a);
console.log("-> array:", array);