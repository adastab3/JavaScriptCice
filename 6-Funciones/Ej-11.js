function conversor (cantidad, moneda){
    if (moneda === 'L'){
        window.alert(`${cantidad*0.86} Libras`)

    }else if (moneda === 'D'){
        window.alert(`${cantidad*1.28611} Dólares`)

    }else if (moneda === 'Y'){
        window.alert(`${cantidad*129.852} Yenes`)
    }else{
        window.alert('ERROR')
    }
}