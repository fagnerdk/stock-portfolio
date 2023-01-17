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
    v = json.BTCBRL['timestamp']
    console.log(json+''+'valo da cotaso'+' '+v)
}

function gg(){
setInterval(() => {
    request(Options,cotaçoes)   
}, 15000);

}gg();
