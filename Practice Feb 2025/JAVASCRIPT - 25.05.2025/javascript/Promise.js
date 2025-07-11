//this promise

//? promise took callback Function and also took (resolve,reject)

//$ ()=>{} // callback function
let ice_cream = new Promise((res, rej) => {
    let got_ice_cream = true;
    if (got_ice_cream) {
        res(got_ice_cream);
    } else {
        rej(got_ice_cream);
    }
}); // here I created new promise

// We started the promises

ice_cream
    .then(() => {
        console.log('eat ice cream');
    })
    .catch(() => {
        console.log('call mommy');
    });

//! What if we get delay to get the response
console.log('A');

let ice_cream_1 = new Promise((res, rej) => {
    let got_ice_cream_1;
    console.log('B');
    /*
    $ setTimeout(()=>{},delay)
    */
    
    setTimeout(() => {
        got_ice_cream_1 = true;
        if (got_ice_cream_1) {
            res(got_ice_cream_1);
        } else {
            rej(got_ice_cream_1);
        }
    }, 3000);

    console.log('C');
    
}); // here I created new promises

// we started the promises
console.log('D');

ice_cream_1
    .then(() => {
        console.log('eat ice cream');
    })
    .catch(() => {
        console.log('call mommy');
    });

