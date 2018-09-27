/* Loading page processing with window.onload */
processing = () => {
  document.querySelector('.load-container').style.display = 'none';
  document.querySelector(".root").style.display = "flex";
};
//window.onload = () => { processing() }
window.onload = setTimeout(processing, 5000);


// MENU RESPONSIVE
let auxMenuResponsive = 1;
document.querySelector(".menu").addEventListener("click", () => {
  let openLeftNavBar = document.querySelector(".left-nav-bar");
  let openColumn = document.querySelector(".column");

  if (auxMenuResponsive === 1) {
    openLeftNavBar.style.display = "block";
    openColumn.style.height = "100vh";
    auxMenuResponsive = 0;
  } else {
    openLeftNavBar.style.display = "none";
    openColumn.style.height = "65px";
    auxMenuResponsive = 1;
  }
});

//SIGN OFF
document.querySelector("#sign-off").addEventListener("click", e => {
  e.preventDefault();
  window.location.href = "login.html";
});

// DISPLAY SORT
let auxSort = 1;
document.querySelector("#sort-img").addEventListener("click", () => {
  let openSortContainer = document.querySelector("#open-sort-container");
  let scrollInfo = document.querySelector(".information-container");
  // margin-top: 300px;
  if (auxSort === 1) {
    console.log("open");
    openSortContainer.style.display = "block";
    scrollInfo.style = "margin-top: 200px";
    auxSort = 0;
  } else {
    console.log("close");
    openSortContainer.style.display = "none";
    scrollInfo.style = "margin-top: 100px";
    auxSort = 1;
  }
});

//Change style of campuses-container
let aux1 = 1;
const campusesContainer = document.querySelector("#campuses-container");
campusesContainer.addEventListener("click", () => {
  let choiceClassVenue = document.querySelectorAll(".campuses-container");
  if (aux1 === 1) {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = "flex";
    }
    campusesContainer.style.background = "#ffe521";
    aux1 = 0;
  } else {
    for (let newStyle of choiceClassVenue) {
      newStyle.style.display = "none";
    }
    campusesContainer.style.background = "#ffffff";
    aux1 = 1;
  }
});

const extractJSON = (str, url, callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(str, data);
    })
};

const options = {
  cohort: null,
  cohortData: {
    users: null,
    progress: null,
  },
  orderBy: "sort-by",
  orderDirection: "ASC",
  search: " "
};

const listCampuses = document.querySelector("#list-campuses");
const listCohorts = document.querySelector("#list-cohorts");
let subtittle = document.querySelector('.subtittle-container');

listCampuses.addEventListener("change", e => {
  const id = e.target.value;
  extractJSON(id, "https://api.laboratoria.la/cohorts/", getCohorts);
});

const getCohorts = (nameOfCohort, cohorts) => {
  const newCohorts = cohorts.filter(cohort => {
    return cohort.id.indexOf(nameOfCohort) !== -1;
  });
  listCohorts.innerHTML = "";
  listCohorts.innerHTML = `<option value="" selected disabled>Selecciona un cohort</option>`;
  newCohorts.forEach(cohort => {
    const optionElements = `<option value="${cohort.id}" >${
      cohort.id
    }</option>`;
    listCohorts.innerHTML += optionElements;
  });
};

listCohorts.addEventListener("change", e => {
  const cohortName = e.target.value;
  console.log(cohortName)
  options.cohort = cohortName;
  extractJSON(
    cohortName,
    `https://api.laboratoria.la/cohorts/${cohortName}/users/`,
    getUsers
  );
});

const getUsers = (nameOfCohort, users) => {
  options.cohortData.users = users;
  console.log(users)
  extractJSON(nameOfCohort, `https://api.laboratoria.la/cohorts/${nameOfCohort}/progress/`, getProgress)
};

const getProgress = (nameOfCohort, progress) =>{
  options.cohortData.progress = progress;
  console.log(progress)
  // const studentsStats = processCohortData(options);
  aunnotienenombre(nameOfCohort);
  // pintarData(nameOfCohort)
};

const aunnotienenombre = (nameOfCohort) => {
  document.querySelector(".video").style.display = "none";
  let orderByData = document.querySelector("#sort-by-container");
  let sortUp = document.querySelector("#direction-asc");
  let sortDown = document.querySelector("#direction-desc");
  //let sortIcon = document.querySelector('#sort-icon')
  let searchData = document.querySelector("#searching");

  subtittle.innerHTML = "";
  const mysubtittle = document.createElement("h1");
  mysubtittle.textContent = nameOfCohort;
  subtittle.appendChild(mysubtittle);


  searchData.addEventListener("keyup", () => {
    options.search = searchData.value;
    let filterUsersWithStats = processCohortData(options);
    paintingUsers(filterUsersWithStats);
  });

  orderByData.addEventListener("change", () => {
    options.orderBy = orderByData.value;
    let sortUsersWithStats = processCohortData(options);
    paintingUsers(sortUsersWithStats);
  });
  sortUp.addEventListener("click", () => {
    options.orderDirection = "ASC";
    let sortUsersWithStats = processCohortData(options);
    paintingUsers(sortUsersWithStats);
  });
  sortDown.addEventListener("click", () => {
    options.orderDirection = "DESC";
    let sortUsersWithStats = processCohortData(options);
    paintingUsers(sortUsersWithStats);
  });

  let usersWithStats = processCohortData(options);
  paintingUsers(usersWithStats);
}

// PAINTING USERS
paintingUsers = usersWithNewStats => {
  const userData = document.querySelector(".students-container");
  userData.innerHTML = "";
  usersWithNewStats = usersWithNewStats.filter(
    usersWithNewStats => usersWithNewStats.role == "student"
  );

  for (let i = 0; i < usersWithNewStats.length; i++) {
    let myName = document.createElement("h1");
    //let myID = document.createElement('p');
    let myRole = document.createElement("p");
    let myTotalPercent = document.createElement("h3");
    let myPercent = document.createElement("p");
    let myExercises = document.createElement("h4");
    let myExercisesTotal = document.createElement("p");
    let myExercisesCompleted = document.createElement("p");
    let myExercisesPercent = document.createElement("p");
    let myReads = document.createElement("h4");
    let myReadsTotal = document.createElement("p");
    let myReadsCompleted = document.createElement("p");
    let myReadsPercent = document.createElement("p");
    let myQuizzes = document.createElement("h4");
    let myQuizzesTotal = document.createElement("p");
    let myQuizzesCompleted = document.createElement("p");
    let myQuizzesPercent = document.createElement("p");
    let myQuizzesScoreSum = document.createElement("p");
    let myQuizzesScoreAvg = document.createElement("p");
    let container = document.createElement("div");
    let containerScore = document.createElement("div");
    let containerInfo = document.createElement("div");
    let containerExercises = document.createElement("div");
    let containerReads = document.createElement("div");
    let containerQuizzes = document.createElement("div");
    //let photo = document.createElement('img');
    //let img = 'img/woman.png';
    //photo.setAttribute('src', img);
    container.classList.add("container");
    containerInfo.classList.add("container-info");
    containerScore.classList.add("container-score");
    containerExercises.classList.add("container-score-info");
    containerReads.classList.add("container-score-info");
    containerQuizzes.classList.add("container-score-info");

    myName.textContent = usersWithNewStats[i].name;
    //myID.textContent = 'ID: ' + usersWithNewStats[i].id;
    myRole.textContent = "Role: " + usersWithNewStats[i].role;
    if (usersWithNewStats[i].hasOwnProperty("stats")) {
      myTotalPercent.textContent = "INTRO: ";
      myPercent.textContent =
        "Total percent: " + usersWithNewStats[i].stats.percent;
      myExercises.textContent = "Exercises: ";
      myExercisesTotal.textContent =
        "Total: " + usersWithNewStats[i].stats.exercises.total;
      myExercisesCompleted.textContent =
        "Completed: " + usersWithNewStats[i].stats.exercises.completed;
      myExercisesPercent.textContent =
        "Percent: " + usersWithNewStats[i].stats.exercises.percent;
      myReads.textContent = "Reads: ";
      myReadsTotal.textContent =
        "Total: " + usersWithNewStats[i].stats.reads.total;
      myReadsCompleted.textContent =
        "Completed: " + usersWithNewStats[i].stats.reads.completed;
      myReadsPercent.textContent =
        "Percent: " + usersWithNewStats[i].stats.reads.percent;
      myQuizzes.textContent = "Quizzes: ";
      myQuizzesTotal.textContent =
        "Total: " + usersWithNewStats[i].stats.quizzes.total;
      myQuizzesCompleted.textContent =
        "Completed: " + usersWithNewStats[i].stats.quizzes.completed;
      myQuizzesPercent.textContent =
        "Percent: " + usersWithNewStats[i].stats.quizzes.percent;
      myQuizzesScoreSum.textContent =
        "ScoreSum: " + usersWithNewStats[i].stats.quizzes.scoreSum;
      myQuizzesScoreAvg.textContent =
        "ScoreAvg: " + usersWithNewStats[i].stats.quizzes.scoreAvg;
    }
    //containerInfo.appendChild(photo);
    containerInfo.appendChild(myName);
    //containerInfo.appendChild(myID);
    containerInfo.appendChild(myRole);
    containerInfo.appendChild(myTotalPercent);
    containerInfo.appendChild(myPercent);
    containerExercises.appendChild(myExercises);
    containerExercises.appendChild(myExercisesTotal);
    containerExercises.appendChild(myExercisesCompleted);
    containerExercises.appendChild(myExercisesPercent);
    containerReads.appendChild(myReads);
    containerReads.appendChild(myReadsTotal);
    containerReads.appendChild(myReadsCompleted);
    containerReads.appendChild(myReadsPercent);
    containerQuizzes.appendChild(myQuizzes);
    containerQuizzes.appendChild(myQuizzesTotal);
    containerQuizzes.appendChild(myQuizzesCompleted);
    containerQuizzes.appendChild(myQuizzesPercent);
    containerQuizzes.appendChild(myQuizzesScoreSum);
    containerQuizzes.appendChild(myQuizzesScoreAvg);

    containerScore.appendChild(containerExercises);
    containerScore.appendChild(containerReads);
    containerScore.appendChild(containerQuizzes);

    container.appendChild(containerInfo);
    container.appendChild(containerScore);

    userData.appendChild(container);
  }
};
