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