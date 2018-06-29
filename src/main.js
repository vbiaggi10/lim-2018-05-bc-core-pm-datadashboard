/* Loading page processing with window.onload */
processing = () => {
  document.querySelector('.load-container').style.display = 'none';
  document.querySelector('.root').style.display = 'flex';
}
window.onload = () => { processing() }

// MENU RESPONSIVE
let auxMenuResponsive = 1;
document.querySelector('.menu').addEventListener('click', () => {

  let openLeftNavBar = document.querySelector('.left-nav-bar');
  let openColumn = document.querySelector('.column');

  if (auxMenuResponsive === 1) {
    openLeftNavBar.style.display = 'block';
    openColumn.style.height = '100vh';
    auxMenuResponsive = 0;
  } else {
    openLeftNavBar.style.display = 'none';
    openColumn.style.height = '65px';
    auxMenuResponsive = 1;
  }
});

//SIGN OFF
document.querySelector('#sign-off').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'login.html';
})

// DISPLAY SORT
let auxSort = 1;
document.querySelector('#sort-img').addEventListener('click', () => {

  let openSortContainer = document.querySelector('#open-sort-container');
  let scrollInfo = document.querySelector('.information-container');
  // margin-top: 300px;
  if (auxSort === 1) {
    console.log('open')
    openSortContainer.style.display = 'block';
    scrollInfo.style = 'margin-top: 200px';
    auxSort = 0;
  } else {
    console.log('close')
    openSortContainer.style.display = 'none';
    scrollInfo.style = 'margin-top: 100px';
    auxSort = 1;
  }
});

//Change style of campuses-container
let aux1 = 1;
const campusesContainer = document.querySelector('#campuses-container');
campusesContainer.addEventListener('click', () => {

  let choiceClassVenue = document.querySelectorAll('.campuses-container');
  if (aux1 === 1) {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = 'flex';
    }
    campusesContainer.style.background = '#ffe521';
    aux1 = 0;
  } else {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = 'none';
    }
    campusesContainer.style.background = '#ffffff';
    aux1 = 1;
  }
});