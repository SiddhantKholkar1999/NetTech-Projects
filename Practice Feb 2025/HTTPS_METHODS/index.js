const myFunc = async () => {
    let res = await fetch('http://localhost:3000/product');

    let data = await res.json();
    console.log(data);
}