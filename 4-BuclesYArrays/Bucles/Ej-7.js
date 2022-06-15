/*let valor = parseInt(window.prompt('Introduce un valor'))
let suma = valor + i

for (let i= valor; valor>0; i++ ) {
if (valor < 0){
window.alert('Se ignoran los valores negativos')
}else if(valor === 0){
    console.log(suma)
    
}else {
    window.prompt('Introduce un valor')
}
}*/

let num = parseInt(window.prompt('Introduce un numero:'))

let suma = 0

for ( let i = 1; i <= num; i++){

        suma += i
}
console.log(suma)


let num2;

do{ 
    num2 = parseInt(window.prompt('Introduce otro numero:'))
} while (num2 !== 0)



//SOLUCION DE CLASE:

let suma = 0

do{
    let numero = parseInt(window.prompt('Introduce un número:'))

    /*numero > 0
    ? suma += numero
    : numero === 0
     ?window.alert(suma)
     :window.alert('NO se aceptan números negativos')
     */

     if (numero > 0) {
        suma += numero
     }else if (numero === 0) {
        window.alert(suma)

     }else {
        window.alert('No se aceptan número negativos')
     }


}while (numero !== 0)
    
    


