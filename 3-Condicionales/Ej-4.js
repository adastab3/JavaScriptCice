let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))
let num3 = parseInt(window.prompt('Introduce otro número más:'))

if ((num1-num2)===20){
    console.log(`El primer número es 20 menos que el segundo`)

}else if((num1-num3)===20){
    console.log(`El primer número es 20 menos que el tercero`)

}else if((num2-num1)===20){
    console.log(`El segundo numero es 20 menos que el primero`)

}else if((num2-num3)===20){
    console.log(`El segundo número es 20 menos que el tercero`)

}else if((num3-num1===20)){
    console.log(`El tercer número es 20 menos que el primero`)

}else if((num3-num2===20)){
    console.log(`El tercer número es 20 menos que el segundo`)

}else {
    console.log(`No hay ningún numero que sea 20 menos que otro`)
}


/*SOLUCION CLASE: (Utiliza Math.abs para calcular un numero absoluto)
let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))
let num3 = parseInt(window.prompt('Introduce otro número más:'))

if (Math.abs(num1 - num2) === 20){
    console.log(`Entre ${num1 y} y ${num2} hay una diferencia de 20`)
}else if (Math.abs(num1 - num3)===20){
    console.log(`Entre ${num1} y ${num3} hay una diferencia de 20`)
}else if (Math.abs(num2 - num3)===20){
    console.log(`Entre ${num2} y ${num3} hay una diferencia de 20`)
}else {
    console.log('NO hay ninguna diferencia de 20 entre los tres numeros')
}
*/
