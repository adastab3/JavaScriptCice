//https://xkcd.com/614/info.0.json
// ESTE EJERCICIO NO SE PUEDE HACER POR UN PROBLEMA DE CORS

function pedir() {
    let input = document.getElementById('input').value
    console.log(input)
    fetch(`https://xkcd.com/${input}/info.0.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        cache: 'default',
    })
    .then(respuesta => console.log(respuesta))
    .then(datos => {
        console.log(datos)
    })

}




document.getElementById('buttonApi').addEventListener('click',(event) => {
            
})