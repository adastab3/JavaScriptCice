let opcion = window.prompt(`¿De qué figura deseas conocer su área?
1 - Círculo
2 - Cuadrado
3 - Triángulo
Introduce 1, 2 ó 3, según tu elección`
)

if (opcion === '1'){

let radio = parseInt(window.prompt('Introduce el radio de tu círculo'))
window.alert(areaCirculo(radio))

}else if (opcion ==='2') {
    let lado = parseInt(window.prompt('Introduce el lado de tu cuadrado.'))
window.alert(areaCuadrado(lado))

} else if (opcion ==='3'){
    let base = parseInt(window.prompt('Introduce la base de tu triángulo.'))
    let altura = parseInt(window.prompt('Introduce la altura de tu triágulo.'))

window.alert(areaTriangulo(radio, altura))
} else {
    window.alert('Eso no es una opción')
}




function areaCirculo (r) {
    return parseInt((r**2)*Math.PI)
}

function areaCuadrado (l) {
    return parseInt(l**2)
}

function areaTriangulo (b, a) {
    return parseInt((b*a)/2)

}