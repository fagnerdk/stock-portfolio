<?php
//session_start();
include_once("conequita.php");

$sql = "SELECT id,mydate,mynome,mynumber  FROM pl2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" .$row["id"] . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" .$row["mydate"] . "</td>";
echo "<th>ContactName</th>";
echo "<td>" .  $row["mynome"] . "</td>";
echo "<th>Address</th>";
echo "<td>" .$row["mynumber"]. "</td>";
echo "<th>City</th>";
echo "</tr>";
echo "</table>";
    //echo "id: " . $row["id"]. " - Name: " . $row["mydate"]. " " . $row["mynome"]." " . $row["mynumber"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
<p id="demo"></p>

<script>
const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "test.php");
xmlhttp.send();
</script>