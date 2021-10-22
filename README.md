# Myflix
## Trabajo autónomo de la tercera semana

Para este trabajo deberás tener en cuenta lo siguiente:

- Dentro del archivo "index.html" tienes 3 div, cada uno con su ID. Esto servirá para identificar y crear las clases que vayas a utilizar en css.
- También existe dentro del div con ID "movies-list" un div con su propio ID que servirá para identificar y crear las clases de css necesarias para darle formato al contenedor de una película.
- Dentro de la carpeta "css" tienes un archivo por cada ID en el archivo "index.html" en donde se deberán agregar los estilos para cada ID por separado.
- Esta separación de archivos y el template inicial del proyecto se da con el objetivo de hacer más fácil el merge de las distintas ramas.
- Puedes revisar el diseño del proyecto de esta semana en Figma, a través del siguiente link: https://www.figma.com/file/3jAXwJvWb9zuQnWnAGSMEu/BIT?node-id=0%3A1

## Features del proyecto

- Navbar con el logo de Myflix, una barra de búsqueda y el nombre e imagen del usuario.
- Contenedor principal con lista de películas agregadas.
- Contenedor con la imagen de la película y calificación.
- Formulario para agregar una nueva película con calificación, nombre e imagen de portada.
- Búsqueda de película por nombre.
- Calificación de cada película.


## Especificaciones

- En la primera posición de la primera fila de películas, siempre debe ubicarse una tarjeta como se detalla en el diseño, que al darle click, se deberá mostrar el modal de formulario para agregar una película.
- En el modal de formulario, se debe agregar una película cuando se presione el botón de "Add" y se debe cerrar el modal sin agregar nada al presionar "Cancel".
- Al dar click en el botón de "Add", en el modal de formulario, se debe validar que el rating, name e imagen hayan sido ingresados. Si alguno de los campos no fue ingresado, se debe mostrar un alert al usuario, indicando este problema.
- La película que se agregue, debe posicionarse en la primera posición de la lista de películas pero después del botón de agregar nueva película.
- Se debe permitir la búsqueda de películas por su nombre exacto.
- Cuando se busque una película y se encuentre una o varias coincidencias, se deberán mostrar en la lista de películas, solo las que coincidan con la búsqueda.
- Si en la búsqueda no se encuentra ninguna coincidencia, no se mostrará película alguna.
- Recuerda que la tarjeta para agregar nuevas películas, siempre debe estar en la primera posición de la primera fila de películas, incluso si se está realizando una búsqueda.
- Para mostrar todas las películas nuevamente, después de hacer una búsqueda, se debe dar click en el botón de buscar con el texto vacío.
- Dependiendo de la cantidad de estrellas que el usuario haya ingresado al agregar una película, se deberán mostrar las estrellas doradas o grises. Ejm: Si se ingresa una película con 2 estrellas, solo deberán mostrarse 2 estrellas doradas en la película y 1 gris.
- Se debe validar al ingreso de la calificación, que esta sea mayor que 0 y menor o igual que 3.
- La imagen simplemente será la URL de cualquier imagen que puedas encontrar en Google.
- Los íconos utilizados deberán tomarse de Fontawesome, por lo que deben usar la CDN de la página.


## Modelo

Para realizar este trabajo deberás utilizar el concepto de objeto en Javascript para almacenar la información de cada película. El objeto deberá tener la siguiente forma. 

Objeto "movie":

```sh
let movie = {
    rating: number,
    name: string,
    image: string
}
```

Para tener la lista de películas con el objeto visto anteriormente, puedes usar el siguiente ejemplo:

```sh
let movies = [
    {
        rating: 2,
        name: "El Titanic",
        image: "https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg"
    },
    {
        rating: 3,
        name: "Interstellar",
        image: "https://pics.filmaffinity.com/Interstellar-366875261-large.jpg"
    }
]
```


# Haz un excelente trabajo. Tu puedes!
