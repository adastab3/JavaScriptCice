let posicion = parseInt(window.prompt('Introduce tu posición en la carrera:'))

posicion===1
?console.log('Ganaste!')
:console.log('Lo importante es participar :)')

if(posicion===1){
    console.log('Medalla de Oro!')
}else if (posicion===2){
    console.log('Medalla de Plata!')
}else if (posicion===3){
    console.log('Medalla de Bronce!')
}else{
    console.log('Lo importante es participar :)')
}

switch(posicion){
    case 1:
        console.log('Medalla de Oro!')
        break;
    case 2:
        console.log('Medalla de Plata!')
        break;
    case 3:
        console.log('Medalla de Bronce!')
        break;
    default:
        console.log('Lo importante es participar :)')
}

if(posicion ===1 || posicion===2 || posicion===3){ // if (posicion > 0 && posicion <= 3)
    console.log('Sube al podium!')
}else{
    console.log('Se acabó la carrera')
}