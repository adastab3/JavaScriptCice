let num = (window.prompt('Introduce un número:'))
console.log(num.length)

for (let i =0; i<=num.length; i++){
    console.log(`${num.substring(i+1, i)}`)
    
}



//SOLUCION DE CLASE:

do {
    let numero = window.prompt('Introduce un número:')
    let inverso = ''

    for (let i = 0; i < numero.length; i++) {
        inverso += numero.substring(numero.length - i, (numero.length - i) +1)
    }

    console.log(inverso)
}while (numero !== '0')
