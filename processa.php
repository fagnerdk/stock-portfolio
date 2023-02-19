<?php
//session_start();
include_once("conequita.php");

$nome = filter_input(INPUT_POST, 'pesquisa', FILTER_SANITIZE_STRING);


//echo "pesquisa: $nome <br>";


$result_usuario = "INSERT INTO açoe (pesquisa) VALUES ('$nome')";
$resultado_usuario = mysqli_query($conn, $result_usuario);
/*
if(mysqli_insert_id($conn)){
	$_SESSION['msg'] = "<p style='color:green;'>Usuário cadastrado com sucesso</p>";
	header("Location: index.php");
}else{
	$_SESSION['msg'] = "<p style='color:red;'>Usuário não foi cadastrado com sucesso</p>";
	header("Location: index.php");
}*/
