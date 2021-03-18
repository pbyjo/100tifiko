/* const getHash = () => location.hash */ // -> valor por defecto #/1/

let hashV = window.location.hash;

const getHash = () => 
    hashV.slice(1).toLocalLowerCase().split('/')[1] || '/'; // _> obtenemos ['','1','']

export default getHash;


/* 

    location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
    .slice(1) corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/
    .toLocaleLowerCase() convierte a minúscula la cadena
    .split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
    [1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1)

*/