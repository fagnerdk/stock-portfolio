function soma(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
  return v0 + v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9;
}

function resutado() {
  var vl0 = document.getElementById("pvl0").innerText;
  var vl1 = document.getElementById("pvl1").innerText;
  var vl2 = document.getElementById("pvl2").innerText;
  var vl3 = document.getElementById("pvl3").innerText;
  var vl4 = document.getElementById("pvl4").innerText;
  var vl5 = document.getElementById("pvl5").innerText;
  var vl6 = document.getElementById("pvl6").innerText;
  var vl7 = document.getElementById("pvl7").innerText;
  var vl8 = document.getElementById("pvl8").innerText;
  var vl9 = document.getElementById("pvl9").innerText;
 
  
    
    var res =soma(
      Number(vl0),
      Number(vl1),
      Number(vl2),
      Number(vl3),
      Number(vl4),
      Number(vl5),
      Number(vl6),
      Number(vl7),
      Number(vl8),
      Number(vl9)
    )
    document.getElementById("soma_totau").innerHTML =
    "R$:" +" " + res.toFixed(2);
  
 
}

setInterval(() => {
  resutado();
}, 1500);

