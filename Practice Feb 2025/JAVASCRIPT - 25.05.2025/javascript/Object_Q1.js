let person = {
    name:'MANAV',
    age: 40,
    city:'NAGAR',    
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

console.log("Through For In Loop");

for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}

console.log("Adding New Property");

person.email = 'manav.nagar@gmail.com';
for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}

console.log("Checking Property");
if (Object.prototype.hasOwnProperty.call(person, "years")) {
    console.log("Yes");
}
if (Object.prototype.hasOwnProperty.call(person, "email")) {
    console.log("Yes");
}
if (Object.prototype.hasOwnProperty.call(person, "age")) {
    console.log("Yes");
}

person.years = '2030';
for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}

console.log("Deleting Property");
delete person.years;
for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}