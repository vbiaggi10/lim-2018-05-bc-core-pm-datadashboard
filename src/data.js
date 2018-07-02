// FUNCTION 1 computeUsersStats(users, progress, courses)
window.computeUsersStats = (users, progress, courses) => {
  console.log(courses)
  let usersWithStats = users.map(
    (user) => {
      //console.log(courses)
      courses = progress[user.id]
      if (courses.hasOwnProperty('intro')) {
        let intro = courses.intro;
        let exerciseTotal = 0;
        let exercisesCompleted = 0;
        let readsTotal = 0;
        let readsCompleted = 0;
        let quizzesTotal = 0;
        let quizzesCompleted = 0;
        let quizzesScoreSum = 0;
        Object.values(intro.units).forEach(unit => {
          Object.values(unit.parts).forEach(part => {

            if (part.hasOwnProperty('exercises')) {
              Object.values(part.exercises).forEach(exercise => {
                exerciseTotal += 1;
                if (part.completed == 1) {
                  exercisesCompleted += 1;
                }
              })
            } else if (part.type === 'read') {
              readsTotal += 1;
              if (part.completed == 1) {
                readsCompleted += 1;
              }
            } else if (part.type === 'quiz') {
              quizzesTotal += 1;
              if (part.completed == 1) {
                quizzesCompleted += 1;
                quizzesScoreSum += part.score;
              }
            }
          });
        });

        let stats = {
          percent: courses.intro.percent,
          exercises: {
            total: exerciseTotal,
            completed: exercisesCompleted,
            percent: Math.round((exercisesCompleted / exerciseTotal) * 100)
          },
          reads: {
            total: readsTotal,
            completed: readsCompleted,
            percent: Math.round((readsCompleted / readsTotal) * 100)
          },
          quizzes: {
            total: quizzesTotal,
            completed: quizzesCompleted,
            percent: Math.round((quizzesCompleted / quizzesTotal) * 100),
            scoreSum: quizzesScoreSum,
            scoreAvg: Math.round(quizzesScoreSum / quizzesCompleted)
          }
        };
        user.stats = stats;
        return user;
      } else {
        let stats = {
          percent: 0,
          exercises: {
            total: 0,
            completed: 0,
            percent: 0
          },
          reads: {
            total: 0,
            completed: 0,
            percent: 0
          },
          quizzes: {
            total: 0,
            completed: 0,
            percent: 0,
            scoreSum: 0,
            scoreAvg: 0
          }
        }
        user.stats = stats;
        return user;
      }

    }
  );
  return usersWithStats;
}

// FUNCTION 3 filterUsers(users, search)
window.filterUsers = (users, search) => {
  let usersFiltered = Object.values(users).filter(
    userFilter =>
      userFilter.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  )
  return usersFiltered;
}

// FUNCTION 4 processCohortData(options)
window.processCohortData = (options) => {
  let computedData = computeUsersStats(options.cohortData.users, options.cohortData.progress, options.cohort);
  let filteredData = filterUsers(computedData, options.search)
  let sortedData = sortUsers(filteredData, options.orderBy, options.orderDirection);
  return sortedData;
}