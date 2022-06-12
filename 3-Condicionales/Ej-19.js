let nota1 = parseInt(window.prompt('Introduce tu puntuación del examen 1:'))
let nota2 = parseInt(window.prompt('Introduce tu puntuación del examen 2:'))
let nota3 = parseInt(window.prompt('Introduce tu puntuacion del examen 3:'))

let final = (nota1>nota2?nota1 + nota3:nota2 + nota3)

if (final===10){
    window.alert('Matrícula!!')

}else if (final >= 9 && final < 10){
    window.alert('Sobresaliente')

}else if (final >= 7 && final < 9){
    window.alert('Notable')

}else if (final >=6 && final < 7){
    window.alert('Bien')

}else if (final >= 5 && final < 6){
    window.alert('Suficiente')

}else if (final >= 0 && final < 5){
    window.alert('Suspenso')
}