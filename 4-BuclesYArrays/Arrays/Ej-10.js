// array con 11 '0'
//pedir valores entre 0 y 10
// valor introducido = la posicion del array +1
//mostras valores
// si valor > 10 decir 'incorrecto'
// si valor < 0  mostrar posiciones y valores del array

const array = [0,0,0,0,0,0,0,0,0,0,0]

let valor = 0

do{
    valor = parseInt(window.prompt('Introduce un valor'))
    
    if(valor > 10){
        window.alert('INCORRECTO!!')
        }else if (valor < 0){
            for(let i = 0; i<12; i++){
            console.log(`${array[i]=i}_____${array[i]}`)
            }
    
        }else{
            array[valor] = array[valor]+1
    
            console.log(`${array[valor]}_____${array[valor]+1}`)
        }
    
}while (valor =>0 && valor <=10)





// SOLUCION DE CLASE:

let array1 = [0,0,0,0,0,0,0,0,0,0,0]
let numero = 0


do {
    numero = parseInt(window.prompt('Introduce un índice:'))

    numero > 10 || numero < 0
    ? console.log('Eres mu tonto')
    : array1[numero] = array1[numero]+1, console.log(array1[numero])

}while(numero >= 0)

for (let i = 0; i < array1.length; i++) {

    console.log(`${i} ----- ${array1[i]}`)
}
