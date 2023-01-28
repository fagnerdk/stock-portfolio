
function mybt(){
    
    var pesquisa = document.getElementById("pesquisar").value;//barra de pesquisa
   document.getElementById("cs").innerText = pesquisa;//barra de pesquisa
    
};

var valo_ct = ['corta0',"corta1","corta2","corta3","corta4","corta5","corta6","corta7","corta8","corta9"]
 valo_ct = ["","","","","","","","","",""]
 document.getElementById("corta1").innerHTML= valo_ct[0] = 1; //acresenta um robo de cotaçao
 document.getElementById("corta2").innerHTML=valo_ct[1] = 2; //acresenta um robo de cotaçao
 document.getElementById("corta3").innerHTML=valo_ct[2] = 3; //acresenta um robo de cotaçao
 document.getElementById("corta4").innerHTML=valo_ct[3] = 4; //acresenta um robo de cotaçao
 document.getElementById("corta5").innerHTML=valo_ct[4] = 5; //acresenta um robo de cotaçao
 document.getElementById("corta6").innerHTML=valo_ct[5] = 6; //acresenta um robo de cotaçao
 document.getElementById("corta7").innerHTML=valo_ct[6] = 7; //acresenta um robo de cotaçao
 document.getElementById("corta8").innerHTML=valo_ct[7] = 8; //acresenta um robo de cotaçao
 document.getElementById("corta9").innerHTML=valo_ct[8] = 9; //acresenta um robo de cotaçao
 document.getElementById("corta10").innerHTML=valo_ct[9] = 10; //acresenta um robo de cotaçao
 
 //buta//
 
function my1(){
    var but1 = document.getElementById('mydata').value ;// iputr data
    document.getElementById('data1').innerHTML=but1;   // id data
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
   //var tc= document.getElementById('coluna').innerHTML='menos'+" "+1;
   //document.getElementById("corta1").innerHTML=papeis*valo_ct[0];
   document.getElementById("pvl0").innerHTML = papeis*valo_ct[0];
   document.getElementById("qtd1").innerHTML= papeis//valo da corta
   const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis 
   
    document.getElementById("pl1").innerHTML = nomer_pl;  // nomer dos papeis
   
};
function my2(){
    var but2 = document.getElementById('mydata').value ;
    document.getElementById('data2').innerHTML=but2;
    document.getElementById("pvl1").innerHTML = papeis*valo_ct[1];
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd2").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+2;
   console.log(tc);*/
   //document.getElementById("corta2").innerHTML=papeis*valo_ct[1];
   document.getElementById("pvl1").innerHTML = papeis*valo_ct[1]; 
   const nomer_pl2 = document.getElementById("mynome").value; // nomer dos papeis
   document.getElementById("pl2").innerHTML = nomer_pl2;  // nomer dos papeis 
};   
function my3(){
    var but3 = document.getElementById('mydata').value ;
    document.getElementById('data3').innerHTML=but3;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl3").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd3").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+3;
   console.log(tc);*/
   //document.getElementById("corta3").innerHTML=papeis*valo_ct[2];
   document.getElementById("pvl2").innerHTML =papeis*valo_ct[2] ;
};
function my4(){
    var but4 = document.getElementById('mydata').value ;
    document.getElementById('data4').innerHTML=but4;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl4").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd4").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+4;
   console.log(tc);*/
   //document.getElementById("corta4").innerHTML=papeis*valo_ct[3];
   document.getElementById("pvl3").innerHTML = papeis*valo_ct[3];
};
function my5(){
    var but5 = document.getElementById('mydata').value ;
    document.getElementById('data5').innerHTML=but5;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl5").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd5").innerHTML= papeis//valo da corta 
  /* var tc= document.getElementById('coluna').innerHTML='menos'+" "+5;
   console.log(tc);*/
   //document.getElementById("corta5").innerHTML=papeis*valo_ct[4];
   document.getElementById("pvl4").innerHTML = papeis*valo_ct[4] ;
};
function my6(){
    var but6 = document.getElementById('mydata').value ;
    document.getElementById('data6').innerHTML=but6;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl6").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd6").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+6;
   console.log(tc);*/
   //document.getElementById("corta6").innerHTML=papeis*valo_ct[5];
   document.getElementById("pvl5").innerHTML = papeis*valo_ct[5];
};
function my7(){
    var but7 = document.getElementById('mydata').value ;
    document.getElementById('data7').innerHTML=but7;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl7").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd7").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+7;
   console.log(tc);*/
   //document.getElementById("corta7").innerHTML=papeis*valo_ct[6];
   document.getElementById("pvl6").innerHTML = papeis*valo_ct[6];
};
function my8(){
    var but8 = document.getElementById('mydata').value ;
    document.getElementById('data8').innerHTML=but8;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl8").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd8").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+8;
   console.log(tc);*/
   //document.getElementById("corta8").innerHTML=papeis*valo_ct[7];
   document.getElementById("pvl7").innerHTML =papeis*valo_ct[7] ;
};
function my9(){
    var but9 = document.getElementById('mydata').value ;
    document.getElementById('data9').innerHTML=but9;
    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl9").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    document.getElementById("qtd9").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+9;
   console.log(tc);*/
   //document.getElementById("corta9").innerHTML=papeis*valo_ct[8];
   document.getElementById("pvl8").innerHTML =papeis*valo_ct[8] ;
};
function my10(w){
    var but10 = document.getElementById('mydata').value ;
   document.getElementById('data10').innerText=but10;
   const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
   document.getElementById("pl10").innerHTML = nomer_pl; // nomer dos papeis
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
   document.getElementById("qtd10").innerHTML= papeis//valo da corta 
   /*var tc= document.getElementById('coluna').innerHTML='menos'+" "+10;
   console.log(tc);*/
   //document.getElementById("corta10").innerHTML=papeis*valo_ct[9];
   document.getElementById("pvl9").innerHTML = papeis*valo_ct[9];

  
};


/*gafico esta abaixo*/ 


    console.log(my1)


    function grafico(){
  
        var nome1 = [ 'kare',"nn", "Spain", "USA", "Argentina"];
      var yArray = [11, 49, 44, 24, 15];
      
      var data = [{
        x:nome1,
        y:yArray,
        type:"bar"
      }];
      
      var layout = {title:"World Wide Wine Production"};
      
      Plotly.newPlot("myChart", data, layout);
      
    };

/*setInterval(()=>{
    console.log(bb(8,30))
}, 5000);
function bb(a,b){
    return a*b
}*/
