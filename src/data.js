/* const userData = document.querySelector('.studentsContainer');
const hola = document.querySelector('.venuesContainer');
const subtittle = document.querySelector('#subtittleContainer');
fetch('https://api.laboratoria.la/cohorts')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    functionCohort(data);
  })
hola.addEventListener("change", (event) => {
  if (hola.value === "lim-2018-03-pre-core-pw") {
    let mysubtittle = document.createElement('h1');
    mysubtittle.textContent="lim-2018-03-pre-core-pw";
    subtittle.appendChild(mysubtittle);
    fetch('https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        functionUser(data);
      })
  } else if (hola.value !== "lim-2018-03-pre-core-pw") {
    alert("Aún no hay datos") ;
  }

}) 

function functionCohort(intento){
  for (let i = 0; i < intento.length; i++) {
    
    hola.innerHTML += "<option value=" + intento[i].id + " >" + intento[i].id + "</option>";
    
  }
}
 */