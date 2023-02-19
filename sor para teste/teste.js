

/*
var tela = document.querySelector('[id="tela_grafico "]');
var lina = tela.getContext("2d");
//linha 1
lina.fillStyle = "bleck"//cor
lina.fillRect(40, 0, 1, 125);// lagura tamanho ou distacia
//linha 2
lina.fillStyle = "bleck"//cor
lina.fillRect(40, 125, 260, 1);// lagura tamanho ou distacia

lina.font = "0.20 rem arial ";
lina.fillText('50',20,19);

lina.font = "30px ";
lina.fillText('40',20,41);

lina.font = "30px ";
lina.fillText('30',20,63);

lina.font = "30px ";
lina.fillText('20',20,85);

lina.font = "30px ";
lina.fillText('10',20,107);

lina.font = "30px ";
lina.fillText('0',20,138);*/

/***********/
/*var nom_pl=[v(),'vale3','petr4','amer3','mgu3','abev3'];//nomes dois papes
var nom_valo=[10,20,30,40,50,60];//valo dois papeis
lina.font = "40px ";
lina.fillText(`${nom_pl[0]}`,45,140);

lina.font = "40px ";
lina.fillText(`${nom_pl[1]}`,85,140);

lina.font = "40px ";
lina.fillText(`${nom_pl[2]}`,120,140);

lina.font = "40px ";
lina.fillText(`${nom_pl[3]}`,155,140);

lina.font = "40px ";
lina.fillText(`${nom_pl[4]}`,190,140);

lina.font = "40px ";
lina.fillText(`${nom_pl[5]}`,225,140);

lina.font = "40px ";
lina.fillText('0',280,140);

//pl 1 

x=nom_valo[0]
function somoa(x){
 return x * 2.20
}
valo=somoa(x)
function deminu(a,b){
  return a -b
}
lina.fillStyle = "blue"//cor
lina.fillRect(50, deminu(125,valo), 20, valo);// lagura tamanho ou distacia

x=nom_valo[1]
function somoa(x){
 return x * 2.20
}
valo=somoa(x)
function deminu(a,b){
  return a -b
}
lina.fillStyle = "blue"//cor
lina.fillRect(85, deminu(125,valo), 20, valo);// lagura tamanho ou distacia

x=nom_valo[2]
function somoa(x){
 return x * 2.20
}
valo=somoa(x)
function deminu(a,b){
  return a -b
}
lina.fillStyle = "blue"//cor
lina.fillRect(123, deminu(125,valo), 20, valo);// lagura tamanho ou distacia

x=nom_valo[3]
function somoa(x){
 return x * 2.20
}
valo=somoa(x)
function deminu(a,b){
  return a -b
}
lina.fillStyle = "blue"//cor
lina.fillRect(158, deminu(125,valo), 20, valo);// lagura tamanho ou distacia

x=nom_valo[4]
function somoa(x){
 return x * 2.20
}
valo=somoa(x)
function deminu(a,b){
  return a -b
}
lina.fillStyle = "blue"//cor
lina.fillRect(192, deminu(125,valo), 20, valo);// lagura tamanho ou distacia

x=nom_valo[5]
function somoa(x){
 return x * 2.20
}
valo=somoa(x)
function deminu(a,b){
  return a -b
}
lina.fillStyle = "blue"//cor
lina.fillRect(225, deminu(125,valo), 20, valo);// lagura tamanho ou distacia*/

 //manipula o teclado

/*document.body.addEventListener('keyup',(Event)=>{
  console.log(Event.code)
  if(Event.code==='ArrowLeft'){
    var c1=document.getElementById('som1');
    c1.innerHTML='esqueda';
    c1.style.backgroundColor='red';
    c1.style.width='30px'
    c1.style.height='200px'
    
  }
  else if(Event.code==='ArrowRight'){
    var c2= document.getElementById('som2');
    c2.innerHTML='direita';
    c2.style.backgroundColor='rgb(153, 0, 255)' ;
    c2.style.width=''
   
  }
  else if(Event.code==='ArrowUp'){
   var c3= document.getElementById('som3');
   c3.innerHTML='top';
   c3.style.backgroundColor='lime' ;
   c3.style.width=''
  }
   else if(Event.code==='ArrowDown'){
    var c4 =document.getElementById('som4');
    c4.innerHTML='baixo';
    c4.style.backgroundColor='hwb(305 0% 0%)' ;
    c4.style.width=''
  }
})*/
function toq(){
  document.body.addEventListener('keyup',(Event)=>{
    console.log(Event.code)
    if(Event.code==='ArrowLeft'){
      var c1=document.getElementById('vd');
      c1.src='../Coringa   Eu Não Sou Um Monstro!.mp4'
      c1.innerHTML='esqueda';
      c1.style.backgroundColor='red';
      c1.style.width='30px'
      c1.style.height='200px'
      
    }
    else if(Event.code==='ArrowRight'){
      var c2= document.getElementById('som2');
      c2.innerHTML='direita';
      c2.style.backgroundColor='rgb(153, 0, 255)' ;
      c2.style.width=''
     
    }
    else if(Event.code==='ArrowUp'){
     var c3= document.getElementById('som3');
     c3.innerHTML='top';
     c3.style.backgroundColor='lime' ;
     c3.style.width=''
    }
     else if(Event.code==='ArrowDown'){
      var c4 =document.getElementById('som4');
      c4.innerHTML='baixo';
      c4.style.backgroundColor='hwb(305 0% 0%)' ;
      c4.style.width=''
    }
  })
}toq()