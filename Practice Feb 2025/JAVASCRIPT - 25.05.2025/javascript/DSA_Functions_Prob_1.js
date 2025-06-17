let value = "hello";
function capitalize(value) {
    value = value.charAt(0).toUpperCase() + value.slice(1,value.length);
    console.log(value);
}
capitalize(value);