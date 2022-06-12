
        let num1 = parseInt(window.prompt('Introduce un numero:'))
        let num2 = parseInt(window.prompt('Introduce otro numero:'))
console.log(`La suma es:  ${num1} + ${num2} = ${num1+num2}`)
console.log (`La resta es:  ${num1} - ${num2} = ${num1-num2}`)
console.log (`La multiplicacion es:  ${num1} * ${num2} = ${num1*num2}`)
console.log (`La media es:  (${num1} + ${num2}) / 2 = ${(num1+num2)/2}`)

if (num1 > num2){
    console.log(`El más grande es: ${num1} y ${num2} es el menor`)
} else if(num2>num1){
    console.log(`El más grande es: ${num2} y ${num1} es el menor`)
}else{
    console.log(`${num1} y ${num2} son iguales`)
}

//if (num1<num2){
//    console.log('El más pequeño es: '+ num1)
//}else if(num2<num1){
//    console.log('El más pequeño es: '+ num2)
//}

    



