// Escribe tu código aquí.
/*1.- Construye una función que reciba por parámetros un string y un array de strings.
La función debe retornar un arreglo de strings con los strings que sean de mayor longitud 
que el string recibido por parámetros. */

/*parámetro 1 string
parámetro 2 array de strings

1. Comparar si el numero de caracteres del string es mas grande que alguno de los caracteres de algun 
    elemento del array. - Recorrer el array-if, si cumple, se imprime
2. Si alguno es más grande lo imprimes. 
*/



function listaPalabras (parDos, parUno){
    for (i = 0 ; i <= 5; i++){
        if (parDos[i].length > parUno.length){
            console.log(parDos[i]);
        }
    }
}
const parDos = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const parUno = ("bocina");

console.log(listaPalabras(parDos, parUno));



//------------------------------------

// Escribe tu código aquí.
function imprimirLista(arrayMiLista){
  const lista = document.getElementById("miLista");
    arrayMiLista.forEach(function(elemento){
      const elementoLista = document.createElement("li");
      elementoLista.textContent = elemento;
      lista.appendChild(elementoLista);
  });
}
const myArray = ['insecto', 'bootcamp', 'escritorio', 'manzana'];
imprimirLista(myArray);
myArray.push("manzana");



/**
 * Contras:
 * 
 * Repasar el uso de funciones, aterrizar ideas, checar el bien el audio para mejorar 
 * la comunicación. Manejar tiempos, tomar consciencia de que estamos siendo entrevistados.
 * Leer bien las instrucciones 
 *
 * 
 * Pros:
 * 
 * Se fue diciendo lo que si iba haciendo para que no exisitiera momentos incomodos, buena expresión de lo
 * que se quería hacer y explicación de lo que se iba haciendo. 
 * 
 * 
 
 */
