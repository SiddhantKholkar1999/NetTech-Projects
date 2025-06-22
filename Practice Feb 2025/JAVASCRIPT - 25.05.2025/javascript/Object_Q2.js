let car = {
    name:'MARUTI',
    engine: {
        engineType: "Petrol",
        horsePower: 120,
        cylinders: 4,
        displacement: 1.5,
        isTurboCharged: true,
    },
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

console.log("Through For In Loop");

for (const key in car) {
    if (typeof (car[key]) === "object" && car[key] != null) {
        let tempObject = car[key];
        for (const key in tempObject) {
            console.log(`${key} : ${tempObject[key]}`);
        }
    } else {
        console.log(`${key} : ${car[key]}`);
    }
}

console.log("Array of all keys : ", Object.keys(car));
console.log("Array of all values :", Object.values(car));