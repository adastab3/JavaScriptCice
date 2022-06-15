let array = []

for (let i =1; i<11; i++){
    array.push(window.prompt('Introduce un valor'))
}

for (let j = 0; j<11; j++){
   
} console.log(array)



//SOLUCION DE CLASE:

let array1 = []

for ( let i = 0; i < 10; i++) {
    array1[i] = parseInt(window.prompt('Introduce un número:'))
}

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])
}