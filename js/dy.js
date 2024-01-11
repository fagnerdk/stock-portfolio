
const obg = {

    dy1: 1.50,
    dy2: 1.50,
    dy3: 1.50,
    dy4: 1.50,
    dy5: 1.50,
    dy6: 1.50,
    dy7: 1.50,
    dy8: 1.50, 
    dy9: 1.50,
    dy10: 1.50, 
    
}
setInterval(()=>{
    const carta1 = document.getElementById('corta1').innerText
    if(typeof(carta1)=='na'){
        console.log(carta1)
    }
    console.log(typeof(Number(carta1) ))
    
},1500)
