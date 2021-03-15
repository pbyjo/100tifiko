const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //Creamos el lugar dónde se exportará el proyecto.
        filename: 'main.js' //Este es el nombre del archivo final para producción.
    },

    resolve: {
        extensions: ['.js'],
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [
            {
                test: /\.js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  //Utilizar un loader como configuración establecida.
                }
            }
        ]
    },
    plugins: [ //Establecemos los plugins que vamos a utilizar
        new HtmlWebPackPlugin(
            {
                inject: true, //Cómo vamos a inyectar un valor a un archivo 
                template: './public/index.html',  //Dirección donde se encuentra el template principal
                filename: './index.html', //El nombre que tendrá el archivo
            }
        )
    ]
}