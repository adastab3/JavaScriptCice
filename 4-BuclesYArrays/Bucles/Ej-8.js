
let par ='P'
let impar = 'I'
let numpar = 100
let numimp = 99

let respuesta = window.prompt(`Introdude "P" (pares) o "I" (impares) para conocer los numero pares o impares del 1 al 100`).toUpperCase()


/*for (let i = 0; i<= numpar; i+2){
    if (respuesta='P'){
     console.log(i)
    }else
    (window.alert('Valor incorrecto'))

for (let j = 1; j <= 99 ; i+2){
        if (respuesta='I'){
    console.log(j)
}else
    (window.alert('Valor incorrecto'))
}
}*/

if (respuesta = 'P'){
    for (let i =0; i<= 100; i+2){
        console.log(i);
        i <= 100
    }

}else if (respuesta ='I'){
    for (let j = 1; j<= 99; j+2){
        console.log(j);
        j <=99

    }

}else{
    window.alert('Valor incorrecto')
}



// SOLUCION DE CLASE:

// usuario da opcion --> bloque consicional
// for 0-100
// do while

do {
  let opcion = window.prompt('introduce una opción (P) Pares o (I) Impares:').toUpperCase()
  if (opcion !== 'I'  &&  opcion !== 'P') {
    window.alert('Opción no válida. Introduce P o I')
  } else {
    for (let i = 0; i <= 100; i ++) {
        if ( i % 2 === 0 && opcion === 'P') {
            console.log(i)
        } else if ( i % 2 === 1  && opcion === 'I') {
            console.log(i)
        }
    }
  }

}while (opcion !== 'P'  && opcion !== 'I')

