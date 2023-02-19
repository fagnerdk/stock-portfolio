/// uma api
const moedas='BTC-BRL';
  
getText(`https://economia.awesomeapi.com.br/json/last/${moedas}`);


async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.json();
    btc = myText.BTCBRL['code']
    valo = myText.BTCBRL['bid']
    console.log( btc +" : "+valo)
    document.getElementById("btc").innerHTML = btc +" : "+valo;
   
}
