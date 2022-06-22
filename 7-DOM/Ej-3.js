let name = window.prompt('Introduce tu nombre:')
let age = parseInt(window.prompt('Introduce tu edad:'))
let contenido = document.createElement('p')

//con IF

if (age >= 18){
    contenido.innerText = `Hola ${name}! Eres mayor de edad.`

}else {
    contenido.innerText = `Hola ${name}! No eres mayor de edad.`
}

document.body.appendChild(contenido)

//con SWITCH

switch(age){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        contenido.innerText = `Hola ${name}, no eres mayor de edad.` , document.body.appendChild(contenido);
        break;
    default:
        contenido.innerText = `Hola ${name}, eres mayor de edad.`, document.body.appendChild(contenido);
}

//con CONDICIONAL TERNARIO

age >= 18
? contenido.innerText = `Hola ${name}, eres mayor de edad.`
: contenido.innerText = `Hola ${name}, no eres mayor de edad.`

document.body.appendChild(contenido) 