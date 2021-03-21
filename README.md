# Rick and morty SPA

### Introducción

#### Introducción al proyecto

 >Clase 2

**SPA** Son aplicaciones construidas con JavaScript que nos permiten cargar nuestro contenido una sóla vez, es decir, se envían los archivos HTML, CSS y JS una sóla vez al navegador y ahí es donde va a vivir toda nuestra aplicación, de tal forma que la aplicación no necesita ser recargada, por ello, si se necesita navegar en la aplicación, se navega entre secciones y no páginas.

Ventajas

    Son fáciles de debuggear.
    Son fáciles de crear.

Desventajas

    No es tan compatible con el SEO.
    No es recomendable aplicarlas para grandes aplicaciones (Aplicación grande => más de 1000 usuarios y más de 50 secciones en la página).

`https://rickandmortyapi.com/`

#### Configurar el entorno de trabajo

 >Clase 3

Iniciamos nuestro proyecto con: 

`git init ` y `npm init`

Arquitectura de directorio: 

/src //archivos
	/routes // las rutas de la aplicacion
	/utils // utilerias
	/styles // estilos
	/pages // paginas que va a tener nuestro proyecto
	index.js //archivo principal
/public // lo que mandamos a produccion
	index.html //template

#### Preparar webpack

 >Clase 4

Instalamos babel y webpack.

`npm install @babel/core babel-loader html-webpack-plugin@4 webpack@4 webpack-cli@3 webpack-dev-server --save-dev`

Dependencias:

**@babel/core** : incluye toda la libreria de babel.

**babel-loader** : Este paquete permite transpilar archivos JavaScript utilizando Babel y webpack.

`npm install -D babel-loader @babel/core @babel/preset-env --save-dev`

**webpack-cli** : Permite manejar ciertos comandos.

`npm i webpack@4 webpack-cli@3`

**html-webpack-plugin** : Permite copiar los archivos HTML del proyecto.

`npm install --save-dev html-webpack-plugin@4`

**webpack-dev-server** : Permite crear un entorno de desarrollo local para probar los cambios que se esta realizando.

`npm install webpack-dev-server --save-dev`

**–save-dev** : Permite instalar un conjunto de dependencia en la modalidad de desarrollo para el archivo packet json.

- Creamos en nuestra raíz un archivo con la configuración de webpack

`webpack.config.js` y agregamos toda nuestra configuracion del proyecto.

### M2 - Templates

#### Crear el Home

 >Clase 5

Creamos en nuestra raíz un .gitignore para ignorar nuestra carpeta de node_modules

agregamos dos scripts en nuestro JSON

`"build" : "webpack --modo production"` // empaquetamiento
`"start" : "webpack-dev-server --open --mode development"` // server

`npm cache clean --force` // podemos limpiar el cache de nuestro node npm

Luego de nuestro prework y configuración de estacion de trabajo generamos nuestro primer template `Home.js`

``` js
	const Home = () => {
    const view = `
    
        <section class="Characters" >

            <article class="Characters__item"> 

                <a href="#/1/" > 
                    <img src="image" alt="name">
                    <h2>Name</h2>
                </a>

            </article>

        </section>
    
    `;

    return view;
	};

	export default Home;
```

#### Crear template de personajes

 >Clase 6

Creamos Character.js | Header.js como componentes dentro de src

#### Crear página de error 404

 >Clase 7

Lanzamos nuestro comando npm run start para crear nuestro server local

### M3 - Router

#### Crear rutas del sitio

 >Clase 8

Creamos en nuestra carpeta de routes index.js que nos permite hacer render a nuestro archivo html.

#### Conectar las rutas con los templates

 >Clase 9

creamos un utils llamado getHash para trabajar con el directorio a partir de # en nuestra app

``` js

    let hashV = window.location.hash;

    const getHash = () => 
        hashV.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // _> obtenemos ['','1','']

    export default getHash;
    
    /* 
    location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
    .slice(1) corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/
    .toLocaleLowerCase() convierte a minúscula la cadena
    .split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
    [1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1) 
    */

```

Una explicacion del HASH:

El hash es el contenido de una url que parte desde el signo de numero(#). Ej:

Código :

Url: http://www.example.com/index.html#algo-aqui
Hash: #algo-aqui

La forma más común de utilizarse y que quizás mucho ya conocen es la de hacer un scroll en la pantalla a la etiqueta HTML con esa ID asignada.

Si en la url el hash indica, por ejemplo… #4 (http://www.dominio.com/pagina.html#4); el navegador desplazará la pantalla hasta el elemento qué posea ese ID. Aquí tienen un ejemplo para que quede claro.

Hash con javascript

La forma de obtener el hash con javascript es la siguiente:
Código : `window.location.hash`

Sería práctico almacenarlo en una variable si lo vas a utilizar.
Código : `var hashV = window.location.hash`

#### Implementar y probar las conexiones

 >Clase 10

``` js 
// Clase 10
    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
```

### M4 - Fetch Data

#### Obtener personajes con la función de llamado a la API

 >Clase 11

en `getData.js` creamos nuestra funcion de llamado y en Home hacemos el llamado de esa funcion para crear los datos dinámicos e imprimirlos dentro de nuestas etiquetas en `Home.js`

#### Conectar la función con la descripción de personajes

 >Clase 12

En character.js usamos getData para traer los datos de la api e imprimir la informacion de cada personaje en nuestro html template section.

### M5 - Deploy

#### Configurar CSS para administrar elementos visuales

 >Clase 13

Instalamos un complemento que necesita webpack para trabajar con los estilos que estamos generando

`npm install copy-webpack-plugin@5.1.1 --save-dev`

añadimos el tag en nuestra configuracion de plugins en webpack

``` js
    new CopyWebpackPlugin([
            {
                from : './src/styles/style.css',
                to : ''
            }
        ])
```

#### Github pages

 >Clase 14

Ahora necesitamos publicar nuestro proyecto. Para ello vamos a trabajar con Travis CI, esta herramienta nos permite generar un script que va a estar conectado a nuestra aplicacion de nuestro repo para que hagamos integración continua. Significa que cuando este detecte un cambio sobre la rama que se este trabajando pueda generar un compilado sobre un servidor en la nube y mandar estos cambios de forma automatizada sin necesidad de subirlos manualmente.














