# Data Dashboard

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente en la evaluación
  de una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, proponemos crear un
**data dashboard** (_tablero de visualización de datos_).

## Introducción

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada en los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos.

Sin embargo, los datos por sí solos son de poca utilidad. Para transformar datos
en **información** necesitamos procesarlos y entenderlos. Una manera muy
sencilla de hacerlo es creando _visualizaciones_. Las
empresas líderes de hoy generan visualizaciones dinámicas de su data
que les permiten entender mejor su negocio y tomar decisiones apropiadas.

En el mundo de la web es muy común el uso de _dashboards_. De hecho, [wikipedia](https://goo.gl/P7PF4y)
nos dice que un _dashboard_ puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así, tenemos dashboards como los de:

* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.

* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png)
  para visualizar la información financiera de una empresa.


## Objetivos de aprendizaje


## Tópicos a cubrir


## Consideraciones generales

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) usando el
comando `npm test`.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio que
contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── data
│   ├── cohorts
│   │   └── lim-2018-03-pre-core-pw
│   │       ├── progress.json
│   │       └── users.json
│   └── cohorts.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    ├── data.spec.js
    ├── fixtures.js
    ├── headless.js
    └── index.html
```

La carpeta `data/` dentro del _boilerplate_ incluye un extracto de la data que
podemos usar tanto en los tests como en la interfaz en sí.

## Entregables

Los criterios mínimos de aceptación para considerar que has completado este
proyecto son:

### User Experience Design

#### 1) Definición del producto

En el `README.md` cuéntanos cómo pensaste y te acercaste a los usuarios al
desarrollar tu producto (Tip: entrevistas) y cuál fue tu proceso para definir
el producto final a nivel de experiencia y de interfaz. Es importante que
detalles:

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con el producto.
* Cuáles son los datos más relevantes que quieren ver en la interfaz y
  por qué. Cómo los descubriste.
* Cuándo revisan normalmente estos datos los usuarios.
* Cómo crees que el producto les está resolviendo sus problemas.
* Cómo fue tu proceso de diseño.

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Debes hacer un _sketch_ (boceto) de tu solución usando papel y lápiz, tomarle
una foto, subirla a tu repositorio y hacer mención del _sketch_ en tu `README.md`.

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés).
Para eso debes aprender a utilizar alguna herramienta de diseño visual.
Nosotros te recomendamos [Figma](https://www.figma.com/) que  es una herramienta
que funciona en el navegador y, además, puedes crear una cuenta gratis. Sin
embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar tu _ideal_ de solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear.

Tu diseño debe seguir los fundamentos de _visual design_, como:
contraste, alineación, jerarquía, entre otros. Tip: revisa el contenido de UX
de la unidad de visual design.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás priorizar.

Como mínimo, tu implementación debe:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las estudiantes de ese cohort
   - Para cada estudiante:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar estudiantes por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar estudiantes por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.
4. Incluir pruebas unitarias.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.

## Detalles de Implementación

### data.js

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

Parte de un buen proyecto es que esté ordenado y que otras programadoras puedan
acceder a el código rápidamente. Es por esto que este orden no es casualidad y
es una convención que generalmente encontrarás en internet bajo el nombre MVC o
Modelo Vista Controlador. En este proyecto Controlador y Modelo estarán bajo
el archivo **data.js**.

El _boilerplate_ incluye tests que esperan que implementes las
siguientes 4 funciones y las _exportes_ al entorno global (`window`) dentro del
script `src/data.js`, ten en cuenta que esto es solo lo básico, si necesitas más
funciones puedes hacerlo:

#### 1) `computeUsersStats(users, progress, courses)`

Esta función es la responsable de "crear" la lista de usuarios (estudiantes)
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
usuarios (`users`) y calcular los indicadores necesarios de progreso para cada
uno. La función debe devolver un nuevo arreglo de usuarios donde a cada objeto
de usuario se le debe agregar una _propiedad_ con el nombre `stats` con las
estadísticas calculadas.

##### Argumentos

* `users`: Arreglo de objetos obtenido de la data en bruto.
* `progress`: Objeto de progreso en bruto. Contiene una llave para cada usuario
  (`uid`) con un objeto que contiene el progreso del usuario para cada curso.
* `courses`: Arreglo de _strings_ con los _ids_ de los cursos del cohort en
  cuestión. Esta data se puede extraer de la propiedad `coursesIndex` de los
  objetos que representan los _cohorts_.

##### Valor de retorno

Un arreglo de objetos `usersWithStats` con la propiedad `stats`, la cual debe ser un
objeto con las siguientes propiedades:

* `percent`: Número entero entre 0 y 100 que indica el porcentaje de completitud
  general del usuario con respecto a todos los cursos asignados a su cohort.
* `exercises`: Objeto con tres propiedades:
  - `total`: Número total de ejercicios autocorregidos presentes en cursos del
    cohort.
  - `completed`: Número de ejercicios autocorregidos completados por el usuario.
  - `percent`: Porcentaje de ejercicios autocorregidos completados.
* `reads`: Objeto con tres propiedades:
  - `total`: Número total de lecturas presentes en cursos del cohort.
  - `completed`: Número de lecturas completadas por el usuario.
  - `percent`: Porcentaje de lecturas completadas.
* `quizzes`: Objeto con cinco propiedades:
  - `total`: Número total de quizzes presentes en cursos del cohort.
  - `completed`: Número de quizzes completadas por el usuario.
  - `percent`: Porcentaje de quizzes completadas.
  - `scoreSum`: Suma de todas las puntuaciones (score) de los quizzes
    completados.
  - `scoreAvg`: Promedio de puntuaciones en quizzes completados.

#### 2) `sortUsers(users, orderBy, orderDirection)`

La función `sortUsers()` se encarga de _ordenar_ la lista de usuarios creada con
`computeUsersStats()` en base a `orderBy` y `orderDirection`.

##### Argumentos

* `users`: Arreglo de objetos creado con `computeUsersStats()`.
* `orderBy`: String que indica el criterio de ordenado. Debe permitir ordenar
  por nombre, porcentaje de completitud total, porcentaje de ejercicios
  autocorregidos completados, porcentaje de quizzes completados, puntuación
  promedio en quizzes completados, y porcentaje de lecturas completadas.
* `orderDirection`: La dirección en la que queremos ordenar. Posibles valores:
  `ASC` y `DESC` (ascendiente y descendiente).

##### Valor de retorno

Arreglo de usuarios ordenado.

#### 3) `filterUsers(users, search)`

##### Argumentos

* `users`: Arreglo de objetos creado con `computeUsersStats()`.
* `search`: String de búsqueda.

##### Valor de retorno

Nuevo arreglo de usuarios incluyendo solo aquellos que cumplan la condición de
filtrado, es decir, aquellos que contengan el string _search_ en el nombre
(`name`) del usuario.

#### 4) `processCohortData(options)`

Esta función es la que deberíamos usar al seleccionar un cohort y cada vez que
el usuario cambia los criterios de ordenado y filtrado en la interfaz. Esta
función debe invocar internamente a `computeUsersStats()`, `sortUsers()` y
`filterUsers()`.


<!-- ### Habilidades blandas

Para completar este proyecto deberás realizar una planificación general del
proyecto, donde esperamos que generes un plan paso a paso de cómo resolverás
el proyecto. Deberás considerar las distintas secciones del data dashboard, los
recursos y el tiempo que dispones.

Para lograrlo, deberás trabajar de manera colaborativa con tu compañera, para
esto tienen que coordinarse en la construcción del producto, viendo de qué
manera quieren trabajar y qué responsabilidades tendrá cada una para que así
cumplan con los tiempos de entrega y ejecución.

Para este proyecto busca instancias de code review, donde deberás buscar
feedback de tu código con otro dupla, para que puedas mejorar el producto.
Mientras más feedback recibas, mejor será su producto.

Nos interesa ver tu capacidad de autoaprendizaje, por lo que esperamos que
logren realizar el hacker edition, de esta manera podrás llevar tu producto al
siguiente nivel.

Para finalizar, deberás presentar su data dashboard al resto del curso, para
esto necesitarás que tu demo tenga acceso desde cualquier computador y que
puedas realizar una presentación que permita a todos comprender lo realizado.
Sabemos que puede ser una instancia difícil, esperamos que logres mostrar su
trabajo y los demás lo comprendan. -->

## Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
  instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
  aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Una de las integrantes del equipo debe realizar un :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo. La otra integrante del equipo deber hacer un fork **del repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote` hacia el mismo. 
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
  install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
  incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
  pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

