let frase = window.prompt('Introduce una frase')
let mitad = frase.length/2

mitad % 2 === 0
?console.log(frase.substring(mitad-1,mitad+1))
:console.log(frase.substring(parseInt(mitad),parseInt(mitad)+1))