/*gafico esta abaixo*/

addEventListener("click", (vl) => {
  if (vl.target.id == "jn1") {
    document.getElementById("yuo_tube").src =
      "https://www.youtube.com/embed/94ZTYbp4xBI";
    document.getElementById("myChart").innerText = "";
  } else if (vl.target.id == "jn2") {
    document.getElementById("yuo_tube").src =
      "https://www.youtube.com/embed/cTQb-GayqvU";
    document.getElementById("myChart").innerText = "";
  } else if (vl.target.id == "grafico") {
   
    var gafico_pl1 = document.querySelector("#pl1").innerText;
    var gafico_pl2 = document.querySelector("#pl2").innerText;
    var gafico_pl3 = document.querySelector("#pl3").innerText;
    var gafico_pl4 = document.querySelector("#pl4").innerText;
    var gafico_pl5 = document.querySelector("#pl5").innerText;
    var gafico_pl6 = document.querySelector("#pl6").innerText;
    var gafico_pl7 = document.querySelector("#pl7").innerText;
    var gafico_pl8 = document.querySelector("#pl8").innerText;
    var gafico_pl9 = document.querySelector("#pl9").innerText;
    var gafico_pl10 = document.querySelector("#pl10").innerText;

    let gafico_pl = [
      gafico_pl1,
      gafico_pl2,
      gafico_pl3,
      gafico_pl4,
      gafico_pl5,
      gafico_pl6,
      gafico_pl7,
      gafico_pl8,
      gafico_pl9,
      gafico_pl10,
    ];

    var gafico_vl1 = document.querySelector("#pvl0").innerText;
    var gafico_vl2 = document.querySelector("#pvl1").innerText;
    var gafico_vl3 = document.querySelector("#pvl2").innerText;
    var gafico_vl4 = document.querySelector("#pvl3").innerText;
    var gafico_vl5 = document.querySelector("#pvl4").innerText;
    var gafico_vl6 = document.querySelector("#pvl5").innerText;
    var gafico_vl7 = document.querySelector("#pvl6").innerText;
    var gafico_vl8 = document.querySelector("#pvl7").innerText;
    var gafico_vl9 = document.querySelector("#pvl8").innerText;
    var gafico_vl10 = document.querySelector("#pvl9").innerText;

    let gafico_vl = [
      gafico_vl1,
      gafico_vl2,
      gafico_vl3,
      gafico_vl4,
      gafico_vl5,
      gafico_vl6,
      gafico_vl7,
      gafico_vl8,
      gafico_vl9,
      gafico_vl10,
    ];

    var nome1 = [
      `${gafico_pl[0]}`,
      `${gafico_pl[1]}`,
      `${gafico_pl[2]}`,
      `${gafico_pl[3]}`,
      `${gafico_pl[4]}`,
      `${gafico_pl[5]}`,
      `${gafico_pl[6]}`,
      `${gafico_pl[7]}`,
      `${gafico_pl[8]}`,
      `${gafico_pl[9]}`,
    ];

    var yArray = [
      `${gafico_vl[0]}`,
      `${gafico_vl[1]}`,
      `${gafico_vl[2]}`,
      `${gafico_vl[3]}`,
      `${gafico_vl[4]}`,
      `${gafico_vl[5]}`,
      `${gafico_vl[6]}`,
      `${gafico_vl[7]}`,
      `${gafico_vl[8]}`,
      `${gafico_vl[9]}`,
    ];

    var data = [
      {
        x: nome1,
        y: yArray,
        type: "bar",
      },
    ];

    var layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myChart", data, layout);

    document.getElementById("yuo_tube").src = "";
  }
});

