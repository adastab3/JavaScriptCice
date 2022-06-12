
        let num1 = parseInt(window.prompt('Introduce un numero:'))
        let num2 = parseInt(window.prompt('Introduce otro numero:'))
        let num3 = parseInt(window.prompt('Introduce un numero más:'))

        if (num1+num2==num3){
            console.log(`El resultado de la suma es: ${num1+num2+num3}`)
        }else {
            console.log('El tercero no es la suma de los dos anteriores')
        }

        

        // SOLUCION CLASE con OPERADOR TERNARIO condicion ? verdadero : falso
 // let num1 = parseInt(window.prompt('Introduce un numero:'))
 // let num2 = parseInt(window.prompt('Introduce otro numero:'))
 // let num3 = parseInt(window.prompt('Introduce un numero más:'))
 // (num1 + num2) === num3
 // ? console.log('El resultado de la suma de los dos primero numero es igual al tercero')
 // : console.log('El tercedro no es la suma de los dos anteriores')        