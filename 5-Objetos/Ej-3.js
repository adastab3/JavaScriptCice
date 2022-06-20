



let num = (window.prompt('Introduce un número'))



if (num<100){
    document.getElementById('numero').style.color = "green";
    document.getElementById('numero').innerHTML = num
    
}else if (num >= 100 && num <= 200 ){
    document.getElementById('numero').style.color = 'yellow';
    document.getElementById('numero').innerHTML = num


}else if (num > 200){
    document.getElementById('numero').style.color = 'red';
    document.getElementById('numero').innerHTML = num

}


document.appendChild(num)
