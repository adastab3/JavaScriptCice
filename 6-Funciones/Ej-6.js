let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))

window.alert(division(num1,num2))


do { 
    let num1 = parseInt(window.prompt('Introduce un número:'))
    let num2 = parseInt(window.prompt('Introduce otro número:'))

window.alert(division(num1,num2))

} while (num2 !== 0)


function division(arg1,arg2) {
    return (arg1/arg2)
     
}


//SOLUCION DE CLASE:

let nu1 = 0
let nu2 = 0

do { 
    let nu1 = parseInt(window.prompt('Introduce un número:'))
    let nu2 = parseInt(window.prompt('Introduce otro número:'))
    if (nu2 !== 0){
window.alert(divide(nu1,nu2))
    }

} while (nu2 !== 0)


function divide(arg1,arg2) {
    return (arg1/arg2)
     
}

