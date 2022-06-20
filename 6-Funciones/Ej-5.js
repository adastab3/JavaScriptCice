

mayor(23,36)

let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))

mayor(num1,num2)



function mayor(arg1,arg2){
    arg1>arg2
    ?console.log('El primer número es más grande')
    :console.log('El primer número NO es más grande')

}



//SOLUCION DE CLASE:

let nu1 = parseInt(window.prompt('Introduce un número:'))
let nu2 = parseInt(window.prompt('Introduce otro número:'))

esMayor(nu1,nu2)
?console.log('El primer número es más grande')
:console.log('El primer número NO es más grande')



function esMayor(arg1,arg2){
    return arg1 > arg2 ? true : false

}
