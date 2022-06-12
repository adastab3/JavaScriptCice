let num1 = window.prompt('Introduce un número entero comprendido entre 25 y 75:')
let num2 = window.prompt('Introduce otro número entero comprendido entre 25 y 75:')

let digit11 = num1.substring(0,1)
let digit12 = num1.substring(1)
let digit21 = num2.substring(0,1)
let digit22 = num2.substring(1)

if(digit11===digit21 || digit11===digit22 || digit12==digit21 || digit12==digit22){
    console.log(`Hay un dígito común entre ${num1} y ${num2}`)

}else {
    console.log(`No hay dígitos en común entre ${num1} y ${num2}`)
}