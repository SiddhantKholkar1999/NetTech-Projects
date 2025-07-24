const API_KEY = "live_ZwbEVGZHYamzmdGYpOz6GaxbEt4ymfop4iFuvxyGUJWFZtqvOpJsusa36sgngCWf";

const api = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`;

const ApiCall = async () => {
    try {
        let response = await fetch(api);
        let data = await response.json();
        console.warn('ApiCall data:', data);
        appendsFunc(data);
    } catch (error) {
        console.warn('ApiCall error:', error);
    }
}

const appendsFunc = (data) => {
    let dataShow = document.getElementById('catInfo'); 

    //Here '?' is used for option chaining used in looping methods
    data?.forEach(element => {
        let breeds = element.breeds[0];
        
        //Card
        const cardDiv = document.createElement('div');
        const img = document.createElement('img');
        const id = document.createElement('p');

        //Detail Div
        const detailDiv = document.createElement('div');
        const name = document.createElement('h1');
        const height = document.createElement('p');
        const width = document.createElement('p');
        const origin = document.createElement('p');
        const life_span = document.createElement('p');
        const description = document.createElement('p');

        //Classname
        cardDiv.className = 'card_div';
        detailDiv.className = 'detail_div';

        // Details
        width.innerText = "Width : " + element.width;
        height.innerText = "Height : " + element.height;
        name.innerText = "Name : " + breeds.name;
        origin.innerText = "Origin : " + breeds.origin;
        life_span.innerText = "Life_span : " + breeds.life_span;
        description.innerText = "Description : " + breeds.description;


        img.src = element.url;

        id.innerText = "ID : " + element.id;
        
        console.log(breeds);

        detailDiv.append(id, name, width, height, origin, life_span, description);
        cardDiv.append(img, detailDiv);
        dataShow.append(cardDiv);
    }); 
}

window.onload = ApiCall;
