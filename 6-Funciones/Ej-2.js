let numVeces = 0

for (i=1; i<3; i++) {
    saludo()
    saludo()
}



function saludo(numVeces){
    numVeces = parseInt(window.prompt('Introduce un número'))

    for (i=1; i <= numVeces; i++){
        console.log('Hola')
    }
}


//SOLUCION DE CLASE:


saludo(5)
saludo(3)

function saludo(numero){
  
    for (i=1; i <= numero; i++){
        console.log('Hola')
    }
}
