let num1 = parseInt(window.prompt('Introduce un número:'))
let num2 = parseInt(window.prompt('Introduce otro número:'))

let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')

p1.innerText = `SUMA: ${num1+num2}`
p1.style.backgroundColor = 'red'
p1.style.color = 'white'

p2.innerText = `RESTA: ${num1-num2}`
p2.style.backgroundColor = 'blue'
p2.style.color = 'yellow'

p3.innerText = `MULTIPLICACIÓN: ${num1*num2}`
p3.style.backgroundColor = 'pink'
p3.style.color = 'blue'

p4.innerText = `DIVISIÓN: ${num1/num2}`
p4.style.backgroundColor = 'black'
p4.style.color = 'grey'

p5.innerText = `RESTO: ${num1%num2}`
p5.style.backgroundColor = 'yellow'
p5.style.color = 'red'

document.body.appendChild(p1)
document.body.appendChild(p2)
document.body.appendChild(p3)
document.body.appendChild(p4)
document.body.appendChild(p5)