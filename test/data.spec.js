describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreSum: 57,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {
    const users = fixtures.users;
    it('debería retornar arreglo de usuarios no ordernado', () => {
      assert.equal(sortUsers(users, 'sort-by', 'ASC')[0].role, 'student');
    });
    it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
      assert.equal(sortUsers(users, 'name', 'ASC')[0].name, 'adriana vizcarra paitán');
    });
    it('debería retornar arreglo de usuarios ordenado por nombre DESC', () => {
      assert.equal(sortUsers(users, 'name', 'DESC')[0].name, 'Zurisadai Rosas Aramburú');
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', () => {
      assert.equal(sortUsers(users, 'total-percent', 'ASC')[0].stats.percent, 0);
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () => {
      assert.equal(sortUsers(users, 'total-percent', 'DESC')[0].stats.percent, 100);
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
      assert.equal(sortUsers(users, 'exercise-percent', 'ASC')[0].stats.exercises.percent, 0);
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
      assert.equal(sortUsers(users, 'exercise-percent', 'DESC')[0].stats.exercises.percent, 100);
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC', () => {
      assert.equal(sortUsers(users, 'quizzes-percent', 'ASC')[0].stats.quizzes.percent, 0);
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () => {
      assert.equal(sortUsers(users, 'quizzes-percent', 'DESC')[0].stats.quizzes.percent, 100);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC', () => {
      assert.equal(sortUsers(users, 'quizzes-average', 'ASC')[0].stats.quizzes.scoreAvg, 0);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC', () => {
      assert.equal(sortUsers(users, 'quizzes-average', 'DESC')[0].stats.quizzes.scoreAvg, 99);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () => {
      assert.equal(sortUsers(users, 'reads-percent', 'ASC')[0].stats.reads.percent, 0);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () => {
      assert.equal(sortUsers(users, 'reads-percent', 'DESC')[0].stats.reads.percent, 100);
    });
    
    let user = [
      {
        name: "Valeria",
        stats: {
          exercises: { total: 2, completed: 2, percent: 100 },
          percent: 100,
          quizzes: {
            total: 3, completed: 3, percent: 100, scoreAvg: 97, scoreSum: 292
          },
          reads: { total: 11, completed: 11, percent: 100 }
        }
      },
      {
        name: "Anthony",
        stats: {
          exercises: { total: 2, completed: 0, percent: 0 },
          percent: 58,
          quizzes: {
            total: 3, completed: 1, percent: 33, scoreAvg: 90, scoreSum: 90
          },
          reads: { total: 11, completed: 8, percent: 73 }
        }
      }]

    it('118, 121', () => { 
      assert.equal(users.map(
        (userss) =>{
          sortUsers(userss, 'total-percent', 'ASC').length
        }
        , users.length ));
    });
    it('100, 103', () => { 
      assert.equal(users.map(
        (userss) =>{
          sortUsers(userss, 'exercise-percent', 'ASC').length
        }
        , users.length ));
    });
  });

});

describe('filterUsers(users, filterBy)', () => {
  const { users } = fixtures;
  const search = 'Lizeth'
  const filtered = filterUsers(users, search);
  it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)', () => {
    assert.deepEqual(filtered[0].name, 'Lizeth');
  });

});

describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {

  const { users, progress } = fixtures;
  let option = {
    cohortData: {
      users: users,
      progress: progress
    },
    orderBy: 'name',
    orderDirection: 'DESC',
    search: 'valeria'
  };
  let data = processCohortData(option);
  it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter', () => {
    assert.deepEqual(data[0].name, 'Valeria Vasquez Yabar');
  });

});
