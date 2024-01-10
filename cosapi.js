
  const url ='https://economia.awesomeapi.com.br/json/last/BTC-BRL'

  setInterval(() => {
    async function getText() {
      let myObject = await fetch(url);
      let myText = await myObject.json();
     
      console.log(myObject);

    }
    getText();
  }, 1500);