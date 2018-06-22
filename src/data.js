/* window.computeUsersStats = (users, progress, courses) => {
    const listOfUser = users.map();

} */
window.computeUsersStats = (users, progress, courses) => {
  //Esta función es la responsable de "crear" la lista de usuarios (estudiantes) que vamos a "pintar" en la pantalla.
  const userList = users.maps((userWithStats) => {
    userWithStats.stats = {
      percent: coursesProm(progress[userWithStats.id], courses),
      exercises: {
        total: totalExcercises(progress[userWithStats.id], courses),
        completed: completedExcercises(progress[userWithStats.id], courses),
        percent: percentExcercises(progress[userWithStats.id], courses)
      },
      reads: {
        total: totalReads(progress[userWithStats.id], courses),
        completed: completedReads(progress[userWithStats.id], courses),
        percent: percentReads(progress[userWithStats.id], courses)
      },
      quizzes: {
        total: totalQuizzes(progress[userWithStats.id], courses),
        completed: completedQuizzes(progress[userWithStats.id], courses),
        percent: percentQuizzes(progress[userWithStats.id], courses),
        scoreSum: scoreSumQuizzes(progress[userWithStats.id], courses),
        scoreAvg: scoreAvgQuizzes(progress[userWithStats.id], courses)
      }
    }
    return userWithStats;
  })
  return userList;
}
window.sortUsers = (users, orderBy, orderDirection) => {
  /* */
}
window.filterUsers = (users, search) => {
  /* */
}
window.processCohortData = (options) => {
  /*options = {
    cohort:  
    cohortData = {
      users: 
      progress:  
    } , 
    orderBy: ,
    orderDirection: ,
    search:  
  }*/ 
}
function coursesProm(progress, courses) {//var courses = ["intro"]
  let cont = 0;
  courses.forEach(curso => {//método forEach() ejecuta la función indicada una vez por cada elemento del array *parámetro [curso]*
    cont += progress[curso].percent;//percent es una propiedad tipo number dentro de var=progress
  });
  return cont;
}
console.log(typeof (window.computeUsersStats));
console.log(typeof (computeUsersStats.users));


window.computeUsersStats = (users, progress, courses) => {//función responsable de "crear" la lista de usuarios (estudiantes) que vamos a "pintar" en la pantalla
  const lista = users.map((usersWithStats) => {//método map() crea un nuevo array con los resultados de la llamada a la función 
    usersWithStats.stats = {//arreglo de objetos usersWithStats con la propiedad stats
      percent: promedioCursos(progress[usersWithStats.id], courses),//propiedad "id" dentro de variable user
      exercises: {
        total: totalExcercises(progress[usersWithStats.id], courses),
      },
    }
    return usersWithStats
  })
  return lista
}

function promedioCursos(progress, courses) {//var courses = ["intro"]
  let contador = 0;
  courses.forEach(curso => {//método forEach() ejecuta la función indicada una vez por cada elemento del array *parámetro [curso]*
    contador += progress[curso].percent;//percent es una propiedad tipo number dentro de var=progress
  });
  return contador;
}

function totalExcercises(progress, courses) {//var courses = ["intro"]
  let total = 0;
  courses.forEach(curso => {//units es una propiedad de la variable progress dentro de la propiedad intro
    Object.values(progress[curso].units).forEach(unit => {//método Object.values() devuelve un array que contiene los valores de las propiedades enumerables de un objeto dado
      let partes = Object.values(unit.parts).filter(ejercicio => ejercicio.hasOwnProperty("exercises"));//propiedad "exercises" dentro de var=progress
      partes.forEach((parte) => {//método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada
        total += Object.values(parte.exercises).length;//parts es una propiedad dentro de units dentro de intro dentro de la variable
      })
    })
  })
  return total;
}

var pieceUsersData = window.computeUsersStats(users, progress, courses)
console.log(pieceUsersData)
document.getElementById("demo").innerHTML = pieceUsersData;