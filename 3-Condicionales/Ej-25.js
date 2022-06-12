let frase = window.prompt('Dile algo a Bob...')

if (frase.indexOf('?!') !== -1 || frase.substring(frase.length -2) ==='!?'){
    window.alert('Eh! Tranquilízate! Yo sé lo que hago.')

}else if (frase.indexOf('?') !== -1){
    window.alert('¡Claro!')

}else if (frase.indexOf('!') !== -1){
    window.alert('Eh! Tranquilízate!')

}else if (frase.length === 0){
    window.alert('Vale, con que esas tenemos...')

}else{
    window.alert('Sin más...')
}