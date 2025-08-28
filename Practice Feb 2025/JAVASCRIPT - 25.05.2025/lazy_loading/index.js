function loadScript(url) {
    //LAZY LOADING LOGIC START
    let isLoaded = document.querySelectorAll(".dynamic-script");

    if (isLoaded === null || isLoaded === undefined || isLoaded.length > 0) {
        console.log("not loading the scripts");
        return;
    }
    //LAZY LOADING LOGIC END
    let myScript = document.createElement("script");
    myScript.src = url;
    myScript.className = "dynamic-script";
    document.body.append(myScript);
    console.log("loading the scripts");
}

let searchInput = document.querySelector("#search_input");

searchInput.addEventListener('focus', function () {
    loadScript("https://code.jquery.com/jquery-3.6.1.min.js");
});