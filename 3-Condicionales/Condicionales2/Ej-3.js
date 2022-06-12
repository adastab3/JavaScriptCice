let num= parseInt(window.prompt('Introduce un numero entero positivo o negativo'))

num < 0
?console.log(`El valor absoluto de ${num} es ${Math.abs(num)}.`)
:console.log(`El número introducido es ${num}`)