// 8 caracteres
// que incluya un numero
// la primera letra Mayúscula

/*let pw = window.prompt('Introduce una contraseña:')

pw.length = 8
pw.includes(searchString:number)
pw.charAt(0).toUpperCase

while (
    if(pw.length = 8){
    pw.includes(searchString:number)
    pw.charAt(0).toUpperCase())
    window.alert('Contraseña correcta')
    }else{
        window.alert('Contraserña incorrecta')
    }

}
*/    



// SOLUCION DE CLASE:

let contrasena = window.prompt('Introduce tu contraseña:')
let numero = false

if (contrasena.length >= 0) {

    for (let i = 0; i < 10; i++) {
        if (contrasena.includes(i.toString())) {
        numero = true
        }

    }

    if ( numero) {
        if(contrasena.substring(0, 1) === contrasena.substring(0,1).toUpperCase()) {
            console.log('La contraseña SI cumple los requisitos')

        }else {
            console.log('La contraseña NO cumple los requisitos')
        }
    }else {
        console.log('La contrseña no cumple los requisitos')
    }


}else {
    console.log('La contraseña no cumple los requisitos')
}


    