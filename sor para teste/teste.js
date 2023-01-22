/*const moedas='BTC-BRL';
  
getText(`https://economia.awesomeapi.com.br/json/last/${moedas}`);


async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.json();
  btc = myText.BTCBRL['code']
  valo = myText.BTCBRL['bid']
  document.getElementById("mo").innerHTML = btc +" : "+valo;
  console.log(getText())
  console.log(myText)
}
*/

function mycep1(a){
 var x = document.getElementById('cep2').value ;

 return document.getElementById('v').innerText=x;
  
}
const cep=(mycep1());
  console.log(mycep1())
  if(cep== 62755-970){
   getText(`https://cep.awesomeapi.com.br/json/${cep}`);


   async function getText(file) {
     let myObject = await fetch(file);
     let myText = await myObject.json();
     btc = myText['address']
     //valo = myText.BTCBRL['bid']
     document.getElementById("mo").innerHTML = btc;
     console.log(getText())
     console.log(myText)
  }
  }
 