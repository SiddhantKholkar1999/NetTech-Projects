// this is the parent function
const justFunction = () => {
    let n = "Siddhant"; // This is going to garbage

    return () => {
        // This is the child function of the parent function
        return n;
    };
};

// This is the one way of the calling the function
console.log(justFunction()());

//! Note : It closes the variable that are dependence it's like frezees them it doesn't allow them to destroy only there is some dependence, and what that means of dependence was -> A Child function need a variable from a parent function even those parent function had been called or after the function called the variable destroyed but the parent func share the variable to the child function..
