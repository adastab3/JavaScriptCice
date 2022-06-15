let valores = []


for(let i = 1; i<= 10; i++) (
    valores.push(parseInt(window.prompt('Introduce un numero')))
    
)

console.log(`${valores}`)

let media = valores[0]+valores[1]+valores[2]+valores[3]+valores[4]+valores[5]+valores[6]+valores[7]+valores[8]+valores[9]

console.log(media/10)



// no sabía como hacerlo sin usar arrays cómo hacerlo sin arrays
// SOLUCION DE CLASE:

let suma = 0
for ( let i = 10; i >0; i--){
    suma = suma + parseInt(window.prompt('Introduce un número:'))
}

console.log(suma/10)

