let nombre = window.prompt('Introduce tu nombre:')
let ventas = parseInt(window.prompt('Introduce el importe de tus ventas obtenidas'))

ventas > 500
? window.alert(`${nombre} has superado el objetivo con tus ${ventas}€ de ventas.
    Te llevas una comisión extra de ${ventas*0.05}€.`)
: window.alert(`${nombre} no has obtenido ninguna comisión extra. `)