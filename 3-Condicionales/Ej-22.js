let edad = parseInt(window.prompt('Introduce tu edad:'))


if (edad >= 18){
     let carnet = window.prompt('¿Tienes carnet de conducir?').toLowerCase()
     if ((carnet=== 'si')) {
          let persona = window.prompt('Introduce tu nombre y apellidos')
          let ciudad = window.prompt('Indica ciudad de recogida del vehículo')
          let duracion = window.prompt('Indica por cuántos días quieres alquilarlo')
          let semanas = parseInt(duracion/7)

          window.alert(`Solicitud Aprobada. ${persona}, puedes recoger tu vehículo en ${ciudad} para tus próximos ${duracion} días-
               El alquiler tendrá un coste de ${
                    semanas > 1 ? semanas*150 + (duracion - (semanas *7) *25) :duracion*25}€`)
               } else {
                    window.alert('No puedes alquilar sin carnet')
               }
          }else {
               window.alert('No puedes alquiler siendo menor de edad.')
          }

     

