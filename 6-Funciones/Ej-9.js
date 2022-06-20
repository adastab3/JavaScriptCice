let num = Math.abs(parseInt(window.prompt('Introduce un número:')))

window.alert(contarCifras(num))


function contarCifras (arg1) {
    return arg1.toString().length
}
