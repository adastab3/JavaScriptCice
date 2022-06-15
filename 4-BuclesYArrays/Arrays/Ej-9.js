// crear array con 10 valores, todos con valor 1
// introducir numero del 0 al 9
// mostar el valor y MODIFICARLO *2
// si mete num negativo, finaliza programa

const array = [1,1,1,1,1,1,1,1,1,1]
let valor = 0
do{
    valor = parseInt(window.prompt('Introduce un valor de 0 a 9'))
    console.log(array[valor])
    array[valor] = array[valor]*2

} while ( valor >= 0 && valor <= 9)

console.log('Fin')


//SOLUCION DE CLASE:

let array1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


/*for (let i = 0; i < 10; i++) {
    array1.push(1)
}*/

let numero = 0

do {
    numero = parseInt(window.prompt('Introduce un numero entre 0 y 9'))
    numero >= 0 && numero <= 9
    ? (console.log(array1[numero]), (array1[numero] = array1[numero] +2))
    : console.log('Eres mu tonto')
}while (numero >=0)