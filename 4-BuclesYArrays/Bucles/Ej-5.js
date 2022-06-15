let num = parseInt(window.prompt('Introduce un numero:'))

let suma = 0

for ( let i = 1; i <= num; i++){

        suma += i
}
console.log(suma)

let num2;

do{ 
    num2 = parseInt(window.prompt('Introduce otro numero:'))
} while (num2 !== 0)

console.log(`${num2}`)


//  SOLUCION DE CLASE:

do{
    let numero = parseInt(window.prompt('Introduce un número;'))
    let suma = 0
    for (let i = 1; i <= numero; i++) {
        suma += i

    }
    console.log(`El resultado de sumar ${numero} y todos los anteriores a él es ${suma}`)
}while(numero !== 0)

console.log('Fin del programa')