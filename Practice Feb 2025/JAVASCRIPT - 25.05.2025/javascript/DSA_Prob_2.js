const Persons = {
    Rahul: 18,
    Raj: 19,
    Kunal: 9,
    Abhi: 17,
    Ajay: 25,
    Arjun: 68,
    Brijesh: 32,
    Mehfooz: 19,
    Arnav: 33, 
};

// console.log(Persons["Rahul"]);
// let valArr = [...new Set(Object.values(Persons))];
// valArr.sort((a,b)=>a-b);
// console.log(valArr);
// for (let i = 0; i < valArr.length; i++) {
//     if (valArr[i]>= 18) {
//         console.log();
//     }
// }
let newArr = [];
for (let key in Persons) {
    if (Persons[key]>= 18) {
        newArr.push({name: key, age: Persons[key]});
        newArr.sort((a,b)=>a.age-b.age);
    }
}
console.log(newArr);