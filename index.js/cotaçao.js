const puppeteer = require('puppeteer');

async function cotacao(){
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  const moeda1 = "dolar" ;
  const moeda2 = "real" ;
  const url = 'https://www.bing.com/search?q=${real}+para+${real}&cvid=b50a41d0a07b4d8a95bd650b984032a2&aqs=edge..69i57j0l8.14585j0j1&pglt=2083&FORM=ANNTA1&PC=NMTS'
  await page.goto(url);
  //await page.screenshot({path: 'example.png'});

 // await browser.close();
 //console.log()
};
cotacao();

 
 