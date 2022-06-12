let temp = parseFloat(window.prompt('Introduce la temperatura:'))
let grados = window.prompt(`Indica si quieres convertirlos en:
C - Grados centígrados
F - Grados fahrenheit`).toUpperCase()

switch(grados){
    case 'C':
        window.alert(`${temp}ºF serían ${(temp-32)*5/9}ºC`)
    case 'F':
        window.alert(`${temp}ºC serían ${(temp*9/5)+32}ºF`)
}

