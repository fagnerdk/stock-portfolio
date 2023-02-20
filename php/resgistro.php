<?php
include_once("conequita.php");

$ddate=filter_input(INPUT_POST,'mydate',FILTER_SANITIZE_STRING);
$prl=filter_input(INPUT_POST,'mynome',FILTER_SANITIZE_STRING);
$numero=filter_input(INPUT_POST,'mynumber',FILTER_SANITIZE_STRING);

echo "mydate:$ddate";
echo "mynome:$prl";
echo "mynumber:$numero";

$resut_pl=" INSERT INTO pl2(mydate,mynome,mynumber)VALUES('$ddate','$prl','$numero')";
$resut_pl1=mysqli_query($conn, $resut_pl);