const api_key_map = "1809a29aa110a20f500b0a21cb6e46b5";

let main = document.getElementById("container");

const apiCall = async () => {
    let citys = document.getElementById("city");

    const api_key = '1809a29aa110a20f500b0a21cb6e46b5';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${api_key}`;

    if (citys.value.trim() === "")
        return;

    try {
        let res = await fetch(api);
        let data = await res.json();
        citys.value = "";
        appends(data, citys);
    } catch (error) {
        console.log(error);
    }
}

const appends = (value) => {
    let iFrame = document.getElementById("iframe_tag");
    main.innerHTML = "";

    
}