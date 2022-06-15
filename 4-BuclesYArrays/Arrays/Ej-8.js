let edades = []

for(let i = 1; i<21; i++){
    edades.push(parseInt(Math.random() * (35 - 18) + 18))
    
}

console.log(parseInt((edades[0]+edades[1]+edades[2]+edades[3]+edades[4]+edades[5]+edades[6]+edades[7]+edades[8]+edades[9]+edades[10]+edades[11]+edades[12]+edades[13]+edades[14]+edades[15]+edades[16]+edades[17]+edades[18]+edades[19]))/20)




// SOLUCION DE CLASE:

let array = []
let suma = 0


for (let i =0; i < 20; i++) {
    
    array.push(Math.floor(Math.random() *(35-18) +18))
    suma += array[1]
}

console.log(suma/array.length)