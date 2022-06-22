let name = window.prompt('Introduce tu nombre:')
let age = parseInt(window.prompt('Introduce tu edad:'))
let contenido = document.createElement('p')

age >= 18
? (contenido.innerText = `Hola ${name}, eres mayor de edad.`, contenido.style.color ='green')
: (contenido.innerText = `Hola ${name}, no eres mayor de edad.` , contenido.style.color = 'red')

document.body.appendChild(contenido) 