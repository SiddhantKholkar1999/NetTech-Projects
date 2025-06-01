//Memory Leakage
// var * let * const

//var
console.log("Iteration for keyword 'var'");
for (var i=0; i<5; i++) {
    //This is Local/Lexical Scope
    console.log('i:',i); //Current Position is on Local Scope
}
console.log("Outside Loop");
console.log('i:', i); //Current Position is on Global Scope

//let
console.log("Iteration for keyword 'let'");
for (let i=0; i<5; i++) {
    //This is Local/Lexical Scope
    console.log('i:',i); //Current Position is on Local Scope
}
console.log("Outside Loop");
console.log('i:', i); //Current Position is on Global Scope

//const
console.log("Iteration for keyword 'const'");
for (const i=0; i<5; i++) {
    //This is Local/Lexical Scope
    console.log('i:',i); //Current Position is on Local Scope
}
console.log("Outside Loop");
console.log('i:', i); //Current Position is on Global Scope