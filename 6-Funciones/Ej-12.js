do {
let year = parseInt(window.prompt('Introduce un año (AAAA):'))
window.alert(esBisiesto(year) ? `${year} es un año bisiesto` : `${year} no es un año bisiesto`)
}while (year !== 0)


function esBisiesto (arg1){
    return (arg1 % 4 === 0 && arg1 % 100 !== 0) || arg1 % 400 === 0
}