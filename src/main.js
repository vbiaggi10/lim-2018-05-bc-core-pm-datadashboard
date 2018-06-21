var apiRequest0 = fetch('https://api.laboratoria.la/campuses/').then(function (response) {
  return response.json()
});

var apiRequest1 = fetch('https://api.laboratoria.la/cohorts/').then(function (response) {
  return response.json()
});

var apiRequest2 = fetch('https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users/').then(function (response) {
  return response.json()
});

var apiRequest3 = fetch('https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/progress/').then(function (response) {
  return response.json()
});

var combinedData = { "apiRequest0": {}, "apiRequest1": {}, "apiRequest2": {}, "apiRequest3": {} };
Promise.all([apiRequest0, apiRequest1, apiRequest2, apiRequest3]).then(function (values) {
  combinedData["apiRequest0"] = values[0]
  combinedData["apiRequest1"] = values[1];
  combinedData["apiRequest2"] = values[2];
  combinedData["apiRequest3"] = values[3];
  const listCampuses = document.querySelector('#listCampuses');
  const listCohorts = document.querySelector('.venuesContainer');
  const listUsers = document.querySelector('#listUsers');
  for (let i = 0; i < values[1].length; i++) {
    const optionElements = document.createElement('option');
    const contenidoOption = document.createTextNode(values[1][i].id);
    optionElements.appendChild(contenidoOption);
    listCohorts.appendChild(optionElements);
  }
  listCohorts.addEventListener('change', () => {
    if (listCohorts.value === 'lim-2018-03-pre-core-pw') {
      const mysubtittle = document.createElement('h1');
      mysubtittle.textContent = "lim-2018-03-pre-core-pw";
      subtittle.appendChild(mysubtittle);
      functionUser(values[2], values[3]);
    }else{
      alert("Aún no hay datos") ;
    }
  })
  //Listando a los usuarios

  return combinedData;
});

function functionUser(users, progress) {
  let tamaño = users.length;
  for (let i = 0; i < tamaño; i++) {
    let myName = document.createElement('h1');
    let myID = document.createElement('p');
    let myRole = document.createElement('p');
    let myProgress = document.createElement('p');
    let container = document.createElement('div');
    let photo = document.createElement('img');
    let img = 'img/woman.png';
    photo.setAttribute('src', img);
    container.classList.add('container');
    myName.textContent = users[i].name;
    myID.textContent = 'ID: ' + users[i].id;
    myRole.textContent = 'Role: ' + users[i].role;
    myProgress.textContent = 'Progress: ' + progress[i].intro.percent;
    container.appendChild(photo);
    container.appendChild(myName);
    container.appendChild(myID);
    container.appendChild(myRole);
    container.appendChild(myProgress);

    userData.appendChild(container);

  }
}

/* window.computeUsersStats = (users, progress, courses) => {
    const listOfUser = users.map();

} */



let aux1 = 1;
let choiceClassVenue = document.querySelectorAll('.venuesContainer');
let venuesContainer = document.querySelector('#venuesContainer');
venuesContainer.addEventListener('click', () => {

  if (aux1 === 1) {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = 'flex';
    }
    venuesContainer.style.background = '#ffe521';
    aux1 = 0;
  } else {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = 'none';
    }
    venuesContainer.style.background = '#ffffff';
    aux1 = 1;
  }
});