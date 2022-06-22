let opcion = parseInt(window.prompt(`Introduce la opción deseada:
1 - SUMAR
2 - RESTAR
3 - MULTIPLICAR
4 - DIVIDIR
5 - RESTO`)
)

let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))

let respuesta = document.createElement('p')

switch(opcion){
    case 1:
        respuesta.innerText = `La suma  de ${num1} y ${num2} es ${num1+num2}`
        break;
    case 2:
        respuesta.innerText = `La resta de ${num1} y ${num2} es ${num1-num2}`
        break;
    case 3:
        respuesta.innerText = `La multiplicación de ${num1} y ${num2} es ${num1*num2}`
        break;
    case 2:
        respuesta.innerText = `La división de ${num1} y ${num2} es ${num1/num2}`
        break;
    case 2:
        respuesta.innerText = `El resto de ${num1} y ${num2} es ${num1%num2}`
        break;
    default:
        respuesta.innerText = `La opción elegida no es válida`

}

document.body.appendChild(respuesta)