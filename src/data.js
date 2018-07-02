// FUNCTION 1 computeUsersStats(users, progress, courses)
window.computeUsersStats = (users, progress, courses) => {
  let usersWithStats = users.map(
    (user) => {
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
            scoreAvg: Math.round(quizzesScoreSum / quizzesTotal)
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

// FUNCTION 2 sortUsers(users, orderBy, orderDirection)
window.sortUsers = (users, orderBy, orderDirection) => {
  let usersSorted = Object.values(users).sort(
    (x, y) => {
      let auxSort1;
      let auxSort2;

      sortHelper = (field1, field2) => {
        if (x.hasOwnProperty('stats')) {
          auxSort1 = x.stats[field1][field2];
        }
        if (y.hasOwnProperty('stats')) {
          auxSort2 = y.stats[field1][field2];
        }
      }

      const optionsSortUsers = {
        'sort-by': () => {
          auxSort1 = x;
          auxSort2 = y;
        },
        'name': () => {
          auxSort1 = x.name.toLowerCase();
          auxSort2 = y.name.toLowerCase();
        },
        'total-percent': () => {
          if (x.hasOwnProperty('stats')) {
            auxSort1 = x.stats.percent;
          }
          if (y.hasOwnProperty('stats')) {
            auxSort2 = y.stats.percent;
          }
        },
        'exercise-percent': () => {
          sortHelper('exercises', 'percent')
        },
        'quizzes-percent': () => {
          sortHelper('quizzes', 'percent')
        },
        'quizzes-average': () => {
          sortHelper('quizzes', 'scoreAvg')
        },
        'reads-percent': () => {
          sortHelper('reads', 'percent')
        },
      }

      optionsSortUsers[orderBy]();

      const direccion = orderDirection === 'DESC' ? -1 : 1;
      if (auxSort1 > auxSort2) {
        return 1 * direccion;
      } else if (auxSort1 < auxSort2) {
        return -1 * direccion;
      } else {
        return 0;
      }
    });

  return usersSorted;

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
  // let courses = options.cohort.coursesIndex;
  let computedData = computeUsersStats(options.cohortData.users, options.cohortData.progress, options.cohort);
  let filteredData = filterUsers(computedData, options.search)
  let sortedData = sortUsers(filteredData, options.orderBy, options.orderDirection);
  return sortedData;
}