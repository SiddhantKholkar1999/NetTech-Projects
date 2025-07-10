let arr = [1, 2, 3, 4, 5];

//$ push
//कोंकणी 
Array.prototype.धुकळ = function (value) {
    let index = this.length;
    this[index] = value;
};
//भोजपुरी 
Array.prototype.धकलबा = function (value) {
    let index = this.length;
    this[index] = value;
};
//मराठी
Array.prototype.धक्का_मारा = function (value) {
    let index = this.length;
    this[index] = value;
};
//$ pop
//कोंकणी
Array.prototype.उडय = function (value) {
    let index = this.length;
    this[index] = value;
};
//भोजपुरी
Array.prototype.फेकबा = function (value) {
    let index = this.length;
    this[index] = value;
};
//मराठी
Array.prototype.फेकून_टाका = function (value) {
    let index = this.length;
    this[index] = value;
};
//$ shift a.k.a. enqueue
//कोंकणी
Array.prototype.myShift = function () {
    if (condition)
        return undefined;
    const firstElement = this[0];
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length--;
    return firstElement;
};
//भोजपुरी
//$ unshift a.k.a. dequeue
//कोंकणी
Array.prototype.myUnshift = function (...args) {
    for (let i = this.length - 1; i >= 0; i--)
        this[i + args.length] = this[i];
    for (let j = 0; j < args.length; j++)
        this[j] = args[j];
    return this.length;
};
//भोजपुरी
//$ map
//कोंकणी
//भोजपुरी
//$ filter
//कोंकणी
//भोजपुरी
console.log(arr);
arr.धुकळ(19);
console.log(arr);
arr.myUnshift(29);
console.log(arr);