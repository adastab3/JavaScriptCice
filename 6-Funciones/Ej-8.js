let num = 10


window.alert(factorial(num))


function factorial (arg1) {
    let resultado = 1
    for (let i = 1; i <= arg1; i++) {
        resultado *= i
    }
    return resultado
}