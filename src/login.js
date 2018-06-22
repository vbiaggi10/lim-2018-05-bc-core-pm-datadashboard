const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');

document.querySelector('#submit').addEventListener("click", () => {

  if (userEmail === 'admin' && userPassword === 'admin') {

    window.location.href = 'index.html';

  } else {
    alert('No es el usuario o contraseña correcta');
  }
})