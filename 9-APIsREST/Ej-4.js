/*a. Utilizar la base de datos de Rick y Morty (disponible en https://rickandmortyapi.com/documentation), para obtener la lista de planetas y mostrarlos en un dropdown (etiqueta select).*/

let listaPlanetas = []
let respuesta = ""

fetch(`https://rickandmortyapi.com/api/location`)
.then((respuesta) => respuesta.json())
.then(datos => {
  let opciones = `<option selected="selected">
  Selecciona una opcion
  </option>`
  for (let i = 0; i < datos.results.length; i++) {
    
    if(datos.results[i].type === 'Planet'){
      opciones += `<option value="${datos.results[i].id}">${datos.results[i].name}</option>` //etiqueta value: le damos de valor la ID
    }
  
  }

  document.getElementById('selector').innerHTML = opciones
  
})

fetch(`https://rickandmortyapi.com/api/location`).then(respuesta => respuesta.json()).then(datos => {

}) 




function avisar(event){
  window.alert(event.target.value)

}
// ponemos en el selector de html la funcion pedir()

function pedir(event) {
  fetch(`https://rickandmortyapi.com/api/location/${event.target.value}`)
  .then(respuesta => respuesta.json())
  .then(datos => {
  let arrayRespuesta = datos.residents

    Promise.all(arrayRespuesta.map(url =>fetch(url))).then(jsonRecibidos => //map. para convertir en objetos
      Promise.all(jsonRecibidos.map(jsonrecibido => jsonrecibido.json())) 
      )
      .then(datosS => {
        let lista =''
        datosS.forEach(
          (objeto) => {
            lista+= `<li>${objeto.name}</li>`
          }
        )
          document.getElementById('respuesta').innerHTML = `<ul>${lista}</ul>`

      }) 
    })

}
    







   

   






//mostrar datos en un dropdown (etiqueta select)

/*<label for ='planetas'>Elige</label>

<select name="planetas" id="planetas">
  <option value=""></option> // for para poner tantas como planetas haya
 
</select>*/