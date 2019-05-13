<?php

include("configuracion.php");        

$codigo = $_POST['codigo'];

$eliminar = "DELETE FROM evaluacion WHERE cedula = '$codigo' ;";
$resultado = $mysql->query("$eliminar") or die("Error en la instruccion SQL");

$eliminar_2 = "DELETE FROM usuarios WHERE cedula = '$codigo' ;";
$resultado_2 = $mysql->query("$eliminar_2") or die("Error en la instruccion SQL");



?>