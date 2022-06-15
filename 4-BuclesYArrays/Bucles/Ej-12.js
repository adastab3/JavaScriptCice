let valor = parseInt(window.prompt('Introduce un número de tres cifras:'))
let digi1 = valor.substring(0,1)
let digi2 = valor.substring(1,2)
let digi3 = valor.substring(3)


console.log(digi1)

let suma= digi1+digi2+digi3;
        for(let i=0;i<valor.length;i++)
        {
            suma = suma+valor[0+i];
            console.log(suma)
        }



        // SOLUCION DE CLASE:

        let cifra = window.prompt('Introduce un número de tres cifras')
        let sumaa = 0

        console.log(
            parseInt(cifra.substring(0, 1)) +
            parseInt(cifra.substring(1, 2)) +
            parseInt(cifra.substring(2))
        )

        for (let i = 0; i < cifra.length; i++){
            sumaa += parseInt(cifra.substring(i, i+1))
        }

        console.log(sumaa)
