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

function countObjectKeys() {
    let keyCount = 0, subKeyCount = 0;
    for (const key in car) {
        if (typeof (car[key]) === "object" && car[key] != null) {
            let tempObject = car[key];
            for (const key in tempObject) {
                console.log(`${key} : ${tempObject[key]}`);
                subKeyCount++;
            }
        } else {
            console.log(`${key} : ${car[key]}`);
        }
        keyCount++;
    }
    console.log(keyCount," ", subKeyCount, " ", keyCount + subKeyCount);
    return keyCount, subKeyCount, keyCount + subKeyCount;
}

console.log(countObjectKeys());


console.log("Array of all keys : ", Object.keys(car));
console.log("Array of all values :", Object.values(car));