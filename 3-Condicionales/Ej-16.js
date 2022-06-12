let premio = (window.prompt(`Tienes dos premios: 
A) es una sorpresa 
B) es un viaje para dos... 
Sólo puedes elegir una opción. ¿Qué opción eliges?`
)).toLowerCase()




if (premio==='a'){
    console.log('Tu premio es un Lamborghini!!!!')
}else if (premio ==='b'){
    console.log(`... Tienes que llevarte a tu suegra.`)
}else {
    console.log('Opción no vádia. Elige "a" o "b"')
}
