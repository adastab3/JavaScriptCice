let array = [1,2,34,45,18,16,13,11,9,100]
for (let i= 0; i<10; i++){
    console.log(array[i])

}
console.log ((array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9])/10)



//SOLUCION DE CLASE:  //Math.floor --> nos hace el redondeo de un numero decimal

let array1 = []
let suma = 0

for (let i = 0; i < 10; i++) {
    array1.push(Math.floor(Math.random()*100))  //Math.random nos devuelve valores aleatorios entre 0-1, *100 para numero aleatorios entre 0-100

}

/*for (let i = 0; i < array1.length; i++) {
    suma += array1[i]
}  */


console.log(suma/array1.length)