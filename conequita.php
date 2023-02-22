<?php 
$servido="localhost";
$username= "root";
$password="";
$database="kaio";
//creante uma connection
$conn = mysqli_connect($servido,$username,$password,$database);

// teste de connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>