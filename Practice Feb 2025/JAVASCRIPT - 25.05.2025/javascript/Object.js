// Object Literal -> { }

let car = {
    brand: 'alto',
    model: '800',
    years: 1999,
    automation: {
        brand: 'alto',
        model: '800',
        years: 1999,
    },
    myFunc: function () {
        console.log('hello');
    },
    hobbies: ['cod', 'gow', 'gta'],
    married: false,
};

for (let key in car) {
    console.log(`keys: ${key} ==> object: ${car[key]}`);
}