
/*ateçao esta api nao pode ser usado nua pasta dar erro*/

const request=require('request');

const moedas='BTC-BRL';
const Options = {
    url:`https://economia.awesomeapi.com.br/json/last/${moedas}`,
    method:'get',
    Headers:{
        'Accept':'applicantion/json',
        'Accept-charset': 'utf-8'
    }
}

const cotaçoes= function(erro,res,body){
    let json= JSON.parse(body)
    btc =json.BTCBRL['code']
    valo = json.BTCBRL['bid']
    console.log(json+''+'valo da cotaso'+' '+btc+" "+valo)
    document.getElementById("mo").innerHTML = btc +" : "+valo;
}

function gg(){
setInterval(() => {
    request(Options,cotaçoes)   
}, 15000);

}gg();




