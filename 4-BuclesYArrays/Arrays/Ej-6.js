let array =[]

for ( let i = 1; i <= 3; i++){
    array.push(parseInt(window.prompt('Introduce un valor')))
}

if (array[0] < array[1] && array[0] < array[2]){
    console.log(`El más pequeño es ${array[0]}`)

}else if (array[1] < array[0] && array[1] < array[2]){
    console.log(`El más pequeño es ${array[1]}`)

}else if (array[2] < array[0] && array[2] < array[1]){
    console.log(`El más pequeño es ${array[2]}`)
}



// SOLUCION DE CLASE:

let array1 = []

for (let i =0; i < 3; i++) {
    array1.push(parseInt(window.prompt('Introduce un número:')))
}

console.log(Math.min(array1[0], array1[1], array1[2]))