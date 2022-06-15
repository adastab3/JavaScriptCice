let num = window.prompt('Introduce un número:')
num.length=num.substring(0,1)=*

for (let i=; i<=num.length ; i++){
    console.log()
}


// SOLUCION CLASE:

let numero = parseInt(window.prompt('Introduce un número:'))

let impresion = ''

for (let i = 1; i < numero; i++) {
    console.log(`${impresion+='*'}`)
}