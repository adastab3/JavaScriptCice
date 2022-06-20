let number = parseInt(window.prompt('Introduce un número:'))

window.alert(esPar(number) ?'El numero es PAR.' :'El número es IMPAR.')


function esPar (arg1){
    return arg1 % 2 === 0

}