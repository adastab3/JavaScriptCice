let array = [window.prompt('Introduce un String:')]


do {
    array.push(window.prompt('Introduce otro string'))
} while (array.length <=2)

console.log(array[1],array[2],array[0])



// SOLUCION DE CLASE:

let array1 = []

for (let i = 0; i < 3; i++) {
    array1.push(window.prompt('introduce un algo'))
}

console.log(array1[1], array1[2], array1[0])