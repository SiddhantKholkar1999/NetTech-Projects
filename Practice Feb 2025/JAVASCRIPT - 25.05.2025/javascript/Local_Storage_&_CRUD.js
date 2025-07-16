let database = JSON.parse(localStorage.getItem('formData')) || [];

function formFunctions(e) {
    e.preventDefault(); //This prevents default loading behaviour which helps to retain input data

    let name = document.querySelector('#userName').value;
    let email = document.querySelector('#userEmail').value;
    let password = document.querySelector('#userPassword').value;
    // console.log('Name : ', name);
    // console.log('Email : ', email);
    // console.log('Password : ', password);
    if (name.length === 0||email.length === 0||password.length === 0) {
        alert("Please Fill the Input");
        return
    };

    let inputData = {
        id: Date.now(),
        name,
        email,
        password,
    }
    // console.log('inputData : ',inputData);
    // console.log('database : ',database);
    database.push(inputData);
    // console.log('database : ',database);
    localStorage.setItem('formData', JSON.stringify(database));
    UI();
}

function UI() {
    const mainDiv = document.querySelector('#infoTable');
    mainDiv.innerHTML = '';

    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    let tr1 = document.createElement('tr'); //Header Row Creation
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');
    let th6 = document.createElement('th');

    th1.innerText = 'Sr.No.';
    th2.innerText = 'ID';
    th3.innerText = 'Name';
    th4.innerText = 'Email';
    th5.innerText = 'Password';
    th6.innerText = 'Buttons';

    tr1.append(th1, th2, th3, th4, th5, th6);
    tableHead.append(tr1);
    table.append(tableHead);

    console.log(database);
    
    database.map((element, index) => {
        //Inserting Table Data
        let tr2 = document.createElement('tr'); //Data row Creation
        //Data Insertion
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        //Creating Button
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        //Assigning Data
        td1.innerText = index + 1;
        td2.innerText = element.id;
        // td2.setAttribute(element.id);
        td3.innerText = element.name;
        td4.innerText = element.email;
        td5.innerText = element.password;
        editBtn.innerText = 'EDIT';
        deleteBtn.innerText = 'DELETE';

        //Adding Buttons as HTML Element
        //EDIT
        editBtn.classList.add('edit-btn');
        editBtn.setAttribute('id', 'edit-btn');
        editBtn.addEventListener('click', function () {
            console.log('This is Edit Button');
            console.log(database[index]);
            // localStorage.removeItem(database);
        });
        
        //DELETE
        deleteBtn.classList.add('delete-btn');
        deleteBtn.setAttribute('id', 'delete-btn');
        deleteBtn.addEventListener('click', function () {
            console.log('This is delete button');
            console.log(database);
            console.log(database[index]);
            // tr2.remove();
        });

        td6.classList.add('td-6');

        td6.append(editBtn, deleteBtn);

        tr2.append(td1, td2, td3, td4, td5, td6);
        tableBody.append(tr2);
        table.append(tableBody);
    });

    mainDiv.append(table);


}

function deleteData() {
    document.getElementsByClassName('edit-btn').item();
    console.log('This is delete data');
    // localStorage.removeItem('formData');
}