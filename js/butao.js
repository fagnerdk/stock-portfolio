function mybt() {
  var pesquisa = document.getElementById("pesquisar").value; //barra de pesquisa
  // document.getElementById("cs").innerText = pesquisa; //barra de pesquisa
  const pl = pesquisa;
  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  setInterval(() => {
    async function getText() {
      let myObject = await fetch(url);
      let myText = await myObject.json();
      btc = myText.results[0]; // entrada

      const papel = btc.symbol; // nomes
      const cotaçao = btc.regularMarketPrice;
      const Mín = btc.regularMarketDayLow; // minima do dia
      const Máx = btc.regularMarketPreviousClose; // max do dia
      console.log(papel + "  " + cotaçao + "  " + Mín + "  " + Máx);

      document.getElementById("cs").innerText =
        papel + "  " + cotaçao + "  " + Mín + "  " + Máx;
      document.getElementById("pesquisar").value = "";
    }
    getText();
  }, 500);
}

var valo_ct = [
  "corta0",
  "corta1",
  "corta2",
  "corta3",
  "corta4",
  "corta5",
  "corta6",
  "corta7",
  "corta8",
  "corta9",
];
valo_ct = ["", "", "", "", "", "", "", "", "", ""];

//buta//

async function my1() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data1").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd1").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl1").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta1").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl0").innerHTML = papeis * cotaçao
}

async function my2() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data2").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd2").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl2").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta2").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl1").innerHTML = papeis * cotaçao;

  console.log(papel);
}
async function my3() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data3").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd3").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl3").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta3").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl2").innerHTML = papeis * cotaçao;
}
async function my4() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data4").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd4").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl4").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta4").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl3").innerHTML = papeis * cotaçao;
}

async function my5() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data5").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd5").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl5").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta5").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl4").innerHTML = papeis * cotaçao;
}

async function my6() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data6").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd6").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl6").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta6").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl5").innerHTML = papeis * cotaçao;
}

async function my7() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data7").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd7").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl7").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta7").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl6").innerHTML = papeis * cotaçao;
}

async function my8() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data8").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd8").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl8").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta8").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl7").innerHTML = papeis * cotaçao;
}

async function my9() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data9").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd9").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl9").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta9").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl8").innerHTML = papeis * cotaçao;
}

async function my10() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data10").innerHTML = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd10").innerHTML = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl10").innerHTML = papel; // nome do papel
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta10").innerHTML = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl9").innerHTML = papeis * cotaçao;
}
