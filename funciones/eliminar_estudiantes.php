<?php

include("configuracion.php");        


$eliminar = "DELETE FROM evaluacion ;";
$resultado = $mysql->query("$eliminar") or die("Error en la instruccion SQL");

$eliminar_2 = "DELETE FROM usuarios ;";
$resultado_2 = $mysql->query("$eliminar_2") or die("Error en la instruccion SQL");



?>