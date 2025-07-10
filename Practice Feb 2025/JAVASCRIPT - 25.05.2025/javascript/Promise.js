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