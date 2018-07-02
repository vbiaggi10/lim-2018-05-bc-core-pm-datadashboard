# Data Dashboard

## Enlace a la interfaz

[Link a Data Dashboard](https://vbiaggi10.github.io/lim-2018-05-bc-core-pm-datadashboard/src/login.html)

## Gif del Demo en móvil

![Sin titulo](/img/dashboard2.gif)


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


## Definición del producto

Los principales usuarios del producto son las Training Managers (TMs) de Laboratoria. Pero debido a la distancia entre nosotras y otros países, solo pudimos hacer una entrevista a Alejandra Ramirez, TM de Lima.

#### Entrevista

Después de investigar sobre entrevistas UX, se pensó en preguntas amplias y preguntas específicas, para realizar la entrevista.

Al principio las preguntas fueron las siguientes:

1. ¿Qué es lo que normalmente haces para ver la data del progreso de las estudiantes?
2. ¿Qué información buscas primero?
3. ¿Cuál es la información más importante?
4. ¿Cuál es la finalidad de obtener esos datos? ¿Para qué los usas?
5. ¿En qué tipo de dispositivo ves la información?
6. ¿Qué es lo que te frustra de la aplicación?
7. ¿Qué necesidades no están siendo satisfechas?

Pero al hacer la entrevista a Alejandra, nos dijo que solo veía un documento lleno de datos; por lo tanto, algunas preguntas no fueron expresamente necesarias debido a la respuesta de la entrevistada, y otra pregunta se añadió: ¿Usarías tu celular para ver la información?

**_Conclusiones_**

Alejandra no tiene una interfaz que realmente le dé la data de las alumnas. El LMS recoge información y le llega un documento excel con demasiada data solo en letras. Pero no tiene algo visual que pueda usar. Por eso mira esa info en su computadora, no utiliza su celular porque es un documento demasiado grande.

El documento excel no es user friendly. Si tuviera un data dashboard sí lo utilizaría en un dispositivo móvil, pero más lo usaría en su laptop.

La información más importante que Alejandra necesita es el resultado o porcentaje de completitud de ejercicios. En cuanto a lectura o quizzes no hay un orden de importante, ambos están en segundo lugar.

Esos datos le ayudan a ver el avance general para poder tomar decisiones a nivel general. También para observar el progreso individual de las alumnas, y así poder actuar de acuerdo a la información que recibe, si es que necesita tomar ciertas medidas con alumnas de manera individual o no.

#### Usuarios

El objetivo principal de las TMs es tener una interfaz donde puedan observar información de manera visual, ordenada, user friendly y funcional del progreso de las estudiantes en el LMS.

Los datos más relevantes que quieren ver en la interfaz son los resultados en cuanto a la completitud de los ejercicios realizados por la alumna. Esto es debido a que así puede tomar decisiones a nivel general e individual para ayudar en el progreso de las estudiantes. Y esto lo descubrimos al hacer la entrevista.

Este producto resolverá el problema de las TMs de manera eficaz. Con esta interfaz podrá ver los datos de una manera visual, simple, práctica, ordenada y puntual. Será más fácil ver la información necesaria.

#### Proceso de diseño

El diseño de la interfaz está inspirado en el LMS de Laboratoria. Al hacer Log in y entrar, con la barra de la parte izquierda, se puede buscar la Sede y el ciclo que requieran. Luego podrán ver la información que hayan seleccionado. Asimismo, hay un botón de búsqueda en la parte superior; y al costado, un botón para ordenar la información de acuerdo a las opciones.

Al principio usamos los mismos colores predominantes: amarillo y blanco. Pero luego, ocurrió la idea de usar el color menta en lugar del amarillo debido a que la interfaz no era para estudiantes. Sin embargo, al presentar la interfaz a la TM de Lima, nos dijo que el color amarillo siempre tenía que predominar; por lo tanto, cambiamos el color.


## Sketch (prototipo de baja fidelidad)

El sketch fue ideado en conjunto con las preguntas de la entrevista. Es así que, al entrevistar a Alejandra también le mostramos un avance de la idea que teníamos para la interfaz. Luego se adaptó de acuerdo a las respuestas obtenidas.

![Sin titulo](/img/sketch-1.jpg)
![Sin titulo](/img/sketch-2.jpg)


## Diseño de la Interfaz de Usuario

Usamos Figma para realizar el diseño de la idea que teníamos para la interfaz.

[Link del Prototipo](https://www.figma.com/proto/TWmFB9HQZFqTk4C1ZsAQqcC5/Prototipo-Data-Dashboard?scaling=min-zoom&node-id=7%3A89)

El prototipo funciona de la siguiente manera:

![Sin titulo](/img/Prototipo-Dashboard.gif)

Esta es la página de Log in:

![Sin titulo](/img/log-in.jpg)


Al entrar a un cohort en particular el data dashboard muestra la información general:

![Sin titulo](/img/data-dashboard-inicial.jpg)


Cuando se selecciona 'alumnas' se obtiene una lista de las alumnas con sus datos y estadísticas:

![Sin titulo](/img/data-dashboard-alumnas.jpg)


Para ordenar la información como quiera el usuario, se puede seleccionar una de las opciones que se presentar al hacer click en las flechas que se encuentran al lado derecho de la interfaz:

![Sin titulo](/img/order-by-1.jpg)
![Sin titulo](/img/order-by-2.jpg)

## Maquetación 

Para construir la interfaz que hemos diseñado, empezamos con la estructura básica de HTML y un estilo básico de CSS. Tal como se explicó anteriormente, el diseño fue inspirado en el LMS de Laboratoria.

Podemos ver una columna izquierda donde aparece la información de la TM que se ha conectado, también se puede elegir uno de los cohorts, y en la parte inferior se puede cerrar sesión. En la parte central y derecha aparece toda la información seleccionada, asimismo, una barra de búsqueda y la opción de filtrar datos. 

Se ha usado el color amarillo de Laboratoria como color principal y el blanco y menta como colores secundarios.

## Proceso de elaboración de funciones

Hemos usado dos archivos de JavaScript en este proyecto: _main.js_ y _data.js_.

En **main.js** va todo lo relacionado al DOM. Creamos las variables necesarias para llamar a las funciones y utilizamos el método fetch para hacer una petición de forma asíncrona. Asimismo, combinamos la data con la API de Laboratoria, donde se encuentra toda la información requerida. Aquí también añadimos los eventos del DOM (addEventListener), tales como: change, click y keyup.

En **data.js** manipulamos los datos implementando las funciones que se requieren en el proyecto. 

Para implementar las funciones elaboramos una serie de pasos para entender cómo sería cada función.

Primero implementamos la cuarta función: processCohortData(options), que es la que invoca a todas las demás. Luego, seguimos con el siguiente orden de implementación: computeUsersStats(users, progress, courses), sortUsers(users, orderBy, orderDirection) y filterUsers(users, search).

1. _computeUsersStats()_ es la función más grande y es en la que recorremos el array de objetos de usuarios, el progreso y los cursos. 

Cuando pensamos en los pasos a seguir, primero queríamos recorrer usuarios y guardar ese recorrido en una variable _userWithStats()_. Si esta tiene la propiedad _intro_, se declaran las variables que serán propiedades del objeto _stats_. Luego, entramos a las unidades del curso y después a las partes de las unidades para poder calcular lo que se requiere. Creamos el objeto _stats_ y completamos la información en cada propiedad. Después agregamos la propiedad _stats_ a _user_ y retornamos _user_.

En el caso de que no tenga la propiedad _intro_ rellenar con ‘0’ el objeto _stats_.

Por último, retornar _userWithStats()_.

Aquí decidimos usar el método _map_ para crear un nuevo array con los resultados. También usamos el método _hasOwnProperty()_ para asegurarnos de que el objeto tenga la propiedad que necesitamos en ese momento. Utilizamos el _forEach()_ para ejecutar la función una vez para cada usuario y obtener la información y las estadísticas.

2. _sortUsers()_ es la segunda función. Con esta podemos ordenar la información de acuerdo a los campos que el usuario escoja y si quiere que sea ascendente o descendente. 

El primer paso es recorrer users para ordenarlos. Luego, establecer como parámetros _x_, _y_ y declaramos variables auxiliares. Después creamos una función para cada caso de ordenamiento y añadimos la dirección ya sea ascendente o descendente. Finalmente, retornamos el recorrido ordenado.

Usamos el método _sort_ para ordenar los elementos alfabéticamente. Aquí declaramos una variable que nos ayuda a simplificar el código con los argumentos que usamos. 

3. _filterUsers()_ es una función que utilizamos para buscar a los usuarios por sus nombres. 

Primero recorremos los _user_ para filtrarlos según la búsqueda, con el método _filter()_. Tomamos los nombres y los convertimos en minúsculas con _toLowerCase()_. Luego, tomamos el _indexOf()_ de la búsqueda convertida en minúsculas. Y se retorna el recorrido filtrado.

En este caso cuando el usuario esté escribiendo el nombre, ya vayan apareciendo resultados de lo que está buscando.

4. _processCohortData()_ es la función que implementamos primero. Aquí creamos variables para invocar las tres funciones antes mencionadas.

Al pensar cómo hacer esta función, el primer paso fue llamar a la función _computeUsersStats()_ y le damos como argumentos las opciones que tenemos ahí. Luego, hacemos lo mismo con la segunda y tercera función. Al final, retornamos la tercera función _filterUsers()_ con los nuevos argumentos.

## Test

Para realizar los test, ingresamos valores específicos y reales de acuerdo a la data para asignarlos a las funciones y así obtengamos una respuesta que nos ayude a saber si las funcionalidad está correcta. 

## Trabajo del proyecto

#### Comunicación

En nuestro proceso de trabajo usamos varias herramientas de comunicación como por ejemplo: Slack, WhatsApp y Docs de Google Drive. Con estas aplicaciones podíamos pasar información de todo tipo para revisar e investigar, coordinar distintos temas, también las usábamos para comunicar nuestro avance mediante fotos y videos.

#### Sprints

Utilizamos Trello como _Kanban digital_ para poder llevar a cabo los sprints y avanzar como lo habíamos planeado.

![Sin titulo](/img/trello-sprint1.jpg)
![Sin titulo](/img/trello-sprint2.jpg)


