const pl = 'PETR4'
const moedas = "7eFzfu6GZjKq6kde536ovJ";
const url =`https://brapi.dev/api/quote/${pl}?token=${moedas}`

setInterval(() => {
   
    async function getText() {
      let myObject = await fetch(url);
      let myText = await myObject.json();
      btc = myText.results[0] // entrada

      const papel = btc.symbol // nomes
      const cotaçao =btc.regularMarketPrice
      const Mín = btc.regularMarketDayLow // minima do dia
      const  Máx  = btc.regularMarketPreviousClose // max do dia
      console.log (papel+ '  '+cotaçao + '  '+ Mín + '  '+ Máx )
      
    }
    getText()

}, 500);
  