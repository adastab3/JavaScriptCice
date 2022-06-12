let nota1 = parseInt(window.prompt('Introduce tu puntuación del examen 1:'))
let nota2 = parseInt(window.prompt('Introduce tu puntuación del examen 2:'))
let nota3 = parseInt(window.prompt('Introduce tu puntuacion del examen 3:'))

let final = nota1>nota2?nota1+nota3:nota2 + nota3

final >= 5 && final ===10
    ?console.log('Matrícula')
    :final >=9 && final < 10
        ?console.log('Sobresaliente!')
        :final >= 7 && final <9
            ?console.log('Notable')
            :final >=6 && final < 7
                ?console.log('Bien')
                :final = 5 && final < 6
                    ?console.log('Suficiente')
                    :console.log('Suspendido')

