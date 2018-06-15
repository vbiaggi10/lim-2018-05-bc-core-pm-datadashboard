const userData = document.querySelector('.studentsContainer');
fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then(function (responseUsers) {
        return responseUsers.json();
    })
    .then(function (dataUser) {
        functionUser(dataUser);
    });
function functionUser(intento) {
    let tamaño = intento.length;
    for (let i = 0; i < tamaño; i++) {
        let myName = document.createElement('h1');
        let myID = document.createElement('p');
        let myRole = document.createElement('p');
        let container = document.createElement('div');
        let photo = document.createElement('img');
        let img = 'img/woman.png';
        photo.setAttribute('src',img);
        container.classList.add('container');
        myName.textContent = intento[i].name;
        myID.textContent = 'ID: ' + intento[i].id;
        myRole.textContent = 'Role: ' + intento[i].role;
        container.appendChild(photo);
        container.appendChild(myName);
        container.appendChild(myID);
        container.appendChild(myRole);
        
        userData.appendChild(container);

    }
}