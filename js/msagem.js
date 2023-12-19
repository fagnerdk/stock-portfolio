
const arry = [];

function mymsg() {
  var t1 = document.getElementById("testo1").value;
  const nome = {
    nome: `${t1}`,
  };
  const mysql = {
    nome: `${nome.nome}`,
  };
  const tablemysql = [];

  arry.push("<li>" + mysql.nome  +"</li>" );

  for (var i = 0; i < arry.length; i++) {
    arry[i] 
    document.getElementById("t").innerHTML =  arry  
  }
  
  console.table(arry);
}

function mydelete(){
  
  var x = document.getElementById("t").innerHTML = arry.pop()
  
}
setInterval(()=>{
  if(arry.length > 8){
   var x = document.getElementById("t").innerHTML = arry.shift()
  }
 },90)

setInterval(()=>{
  document.getElementById("t").innerHTML = arry
},90)



