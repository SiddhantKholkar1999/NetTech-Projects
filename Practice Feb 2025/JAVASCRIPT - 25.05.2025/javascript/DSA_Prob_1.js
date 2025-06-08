var arr = [1,1,2,23,32,40,50,60,50];
console.log(arr);
function findLargestNumber(n) {
    let uniqueArr = [...new Set(arr)];
    console.log("Unique Array : ",uniqueArr);
    uniqueArr.sort((a,b)=>b-a);
    console.log("Unique Sorted Array : ",uniqueArr);
}
findLargestNumber(3);