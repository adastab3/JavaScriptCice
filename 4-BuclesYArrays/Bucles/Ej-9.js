for (let i = 1 ; i <= 12 ; i++) {

    console.log(`${i}   ${i**2}
    ${i}    ${i**3}`)
}


// SOLUCION DE CLASE

for (let i = 1; i <= 12; i++) {
    let resultado = 0
    i % 2 === 0
    ?resultado = i **3
    :resultado = i **2


    console.log(`${i} ----- ${resultado}`)
}