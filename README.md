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
`"start" : "webpack-dev-server --modo development"` // server

`npm cache clean --force` // podemos limpiar el cache de nuestro node npm

