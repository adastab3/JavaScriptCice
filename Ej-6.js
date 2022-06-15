
/*let fact1 = num[0]*num[0]
let fact2 = num[0]*num[1]
let fact3 = num[0]*num[1]*num[2]
let fact4 = num[0]+num[1]*num[2]*num[3]
let fact5 = num[0]+num[1]*num[2]*num[3]*num[4]
let fact6 = num[0]+num[1]*num[2]*num[3]*num[4]*num[5]
let fact7 = num[0]+num[1]*num[2]*num[3]*num[4]*num[5]*num[6]
let fact8 = num[0]+num[1]*num[2]*num[3]*num[4]*num[5]*num[6]*num[7]
let fact9 = num[0]+num[1]*num[2]*num[3]*num[4]*num[5]*num[6]*num[7]*num[8]
let fact10 = num[0]+num[1]*num[2]*num[3]*num[4]*num[5]*num[6]*num[7]*num[8]*num[9]*/
 // No sé cómo sacar el factorial


let resultado = 1

for (let i = 1 ; i <= 10 ; i++) {

    resultado = resultado*i

    
}


//SOLUCION DE CLASE:

for (let i =1; i<= 10; i++) {
    let factorial = 1
    for (let j = 1; j<= 1; j++){
        factorial += j
    
    }
    console.log(`${i} ----- ${factorial}`)
}
