let temp = parseInt(window.prompt('Qué temperatura hace hoy?'))

if (temp>40 || temp<=10){
    console.log('Vete a otro sitio')
}else if (temp>30 && temp<=40){
    console.log('Enciende el aire condicionado')

}else if(temp>20 && temp<=30){
    console.log('No hagas nada')
}else if(temp>10 && temp<=20 ){
    console.log('Enciende la calefaccion')
}else{
    console.log('NO VÁLIDO')
}
