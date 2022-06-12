let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))

if (num1===num2){
    console.log('0')
}else if((num1%6)===(num2%6)){
    num1<num2
    ?console.log(`El más pequeño es ${num1}`)
    :console.log(`El más pequeño es el ${num2}`)
}else{
    num1<num2
    ?console.log(`El mas grande es el ${num2}`)
    :console.log(`El más grande es el ${num1}`)
}