let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce un número:'))
let num3 = parseInt(window.prompt('Introduce un número:'))

if (num1<num2 && num1<num3){
    menor = num1
}else if (num2<num1 && num2<num3){
    menor = num2
}else if ( num3<num1 && num3<num2){
    menor = num3
}else {
    console.log('No hay ningún número menor que los demás')
}

console.log(`El menor es el ${menor}`)