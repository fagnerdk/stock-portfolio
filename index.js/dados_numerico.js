function mybt(){
    var pesquisa = document.getElementById("pesquisar").value;//barra de pesquisa
    document.getElementById("cs").innerText = pesquisa;//barra de pesquisa
}

var valo_ct = ['corta0',"corta1","corta2","corta3","corta4","corta5","corta6","corta7","corta8","corta9","corta10"]
 valo_ct = ["","","","","","","","","",""]
 valo_ct[0] = 1; //acresenta um robo de cotaçao
 valo_ct[1] = 2; //acresenta um robo de cotaçao
 valo_ct[2] = 3; //acresenta um robo de cotaçao
 valo_ct[3] = 4; //acresenta um robo de cotaçao
 valo_ct[4] = 5; //acresenta um robo de cotaçao
 valo_ct[5] = 6; //acresenta um robo de cotaçao
 valo_ct[6] = 7; //acresenta um robo de cotaçao
 valo_ct[7] = 8; //acresenta um robo de cotaçao
 valo_ct[8] = 9; //acresenta um robo de cotaçao
 valo_ct[9] = 10; //acresenta um robo de cotaçao
//
function myfunction(){
    //minha data de compra
    var data = document.getElementById("mydata").value;// data
    document.getElementById('data1').innerText =data;//data
    // meu papeis em cateira

    const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
    document.getElementById("pl1").innerHTML = nomer_pl; // nomer dos papeis

    // somar total
    var papeis = document.getElementById("mynumber").value;// quantidade de papel
    var resutado0 = papeis * valo_ct [0]; // mutiplicando o valo da cortçao
    var resutado1 = papeis * valo_ct [1]; // mutiplicando o valo da cortçao
    var resutado2 = papeis * valo_ct [2]; // mutiplicando o valo da cortçao
    var resutado3 = papeis * valo_ct [3]; // mutiplicando o valo da cortçao
    var resutado4 = papeis * valo_ct [4]; // mutiplicando o valo da cortçao
    var resutado5 = papeis * valo_ct [5]; // mutiplicando o valo da cortçao
    var resutado6 = papeis * valo_ct [6]; // mutiplicando o valo da cortçao
    var resutado7 = papeis * valo_ct [7]; // mutiplicando o valo da cortçao
    var resutado8 = papeis * valo_ct [8]; // mutiplicando o valo da cortçao
    var resutado9 = papeis * valo_ct [9]; // mutiplicando o valo da cortçao
    
    document.getElementById("corta0").innerHTML= valo_ct[0];//valo da corta 
    document.getElementById("corta1").innerHTML= valo_ct[1];//valo da corta 
    document.getElementById("corta2").innerHTML= valo_ct[2];//valo da corta 
    document.getElementById("corta3").innerHTML= valo_ct[3];//valo da corta 
    document.getElementById("corta4").innerHTML= valo_ct[4];//valo da corta 
    document.getElementById("corta5").innerHTML= valo_ct[5];//valo da corta 
    document.getElementById("corta6").innerHTML= valo_ct[6];//valo da corta 
    document.getElementById("corta7").innerHTML= valo_ct[7];//valo da corta 
    document.getElementById("corta8").innerHTML= valo_ct[8];//valo da corta 
    document.getElementById("corta9").innerHTML= valo_ct[9];//valo da corta 

    document.getElementById("pvl0").innerHTML = resutado0;//soma da quantidade de corta
    document.getElementById("pvl1").innerHTML = resutado1;//soma da quantidade de corta
    document.getElementById("pvl2").innerHTML = resutado2;//soma da quantidade de corta
    document.getElementById("pvl3").innerHTML = resutado3;//soma da quantidade de corta
    document.getElementById("pvl4").innerHTML = resutado4;//soma da quantidade de corta
    document.getElementById("pvl5").innerHTML = resutado5;//soma da quantidade de corta
    document.getElementById("pvl6").innerHTML = resutado6;//soma da quantidade de corta
    document.getElementById("pvl7").innerHTML = resutado7;//soma da quantidade de corta
    document.getElementById("pvl8").innerHTML = resutado8;//soma da quantidade de corta
    document.getElementById("pvl9").innerHTML = resutado9;//soma da quantidade de corta
    let somar =["pvl0","pvl1","pvl2","pvl3","pvl4","pvl5","pvl6","pvl7","pvl8","pvl9"];
    somar =['','','','','','','','','',''];
    somar[0]=resutado0;//somando todo valo da cortaçao
    somar[1]=resutado1;//somando todo valo da cortaçao
    somar[2]=resutado2;//somando todo valo da cortaçao
    somar[3]=resutado3;//somando todo valo da cortaçao
    somar[4]=resutado4;//somando todo valo da cortaçao
    somar[5]=resutado5;//somando todo valo da cortaçao
    somar[6]=resutado6;//somando todo valo da cortaçao
    somar[7]=resutado7;//somando todo valo da cortaçao
    somar[8]=resutado8;//somando todo valo da cortaçao
    somar[9]=resutado9;//somando todo valo da cortaçao
    var x = 
    somar[0]+//somando todo valo da cortaçao
    somar[1]+//somando todo valo da cortaçao
    somar[2]+//somando todo valo da cortaçao
    somar[3]+//somando todo valo da cortaçao
    somar[4]+//somando todo valo da cortaçao
    somar[5]+//somando todo valo da cortaçao
    somar[6]+//somando todo valo da cortaçao
    somar[7]+//somando todo valo da cortaçao
    somar[8]+//somando todo valo da cortaçao
    somar[9]//somando todo valo da cortaçao
    ;
    document.getElementById("soma_totau").innerHTML="R$="+x;//somando todo valo da cortaçao
   // console.log(somar[0]+somar[9]);
    //soma total
    document.getElementById("qtd0").innerHTML = papeis;
    //valo em caixa
    var caixa = document.getElementById("myvalo").value;
    var meno =  caixa - x ;
  
    document.getElementById("menos_soma").innerHTML = "R$-"+ meno;
    // grafico a baixo
    var xArray = [nomer_pl,"petr4","vale4f",]; //nome do papeis
    var yArray = somar; // valo dois pais
       
    var data = [{
      x:xArray,
      y:yArray,
      type:"bar"
    }];
    
    var layout = {title:"E volulao da carteira"};
    
    Plotly.newPlot("lp", data, layout); 
   
  

}

/*function mycheckid(){
    var z = document.getElementById("caixa3");
 
    if(z.checked || z == ""){
        const nomer_pl = document.getElementById("mynome").value; // nomer dos papeis
   
        document.getElementById("pl1").innerHTML = nomer_pl; // nomer dos papeis
    }
    else {
       
    };
};*/