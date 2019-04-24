<?php
include("configuracion.php");

$documento = $_POST['documento'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$cabeza = $_POST['cabeza'];
$pierna = $_POST['pierna'];
$brazo = $_POST['brazo'];

$fecha_hora = date("Y-m-d H:i:s",time());

$cabeza = nota($cabeza);
$pierna = nota($pierna);
$brazo = nota($brazo);

$query="insert into usuarios(cedula,nombres,apellidos) values('$documento','$nombre','$apellidos')";
$result = $mysql->query("$query") or die("Error en la instruccion SQL");


$query2="insert into evaluacion(id_evaluacion,cedula,fecha,cabeza,brazo,pierna) values('','$documento','$fecha_hora','$cabeza','$brazo','$pierna')";
$result2 = $mysql->query("$query2") or die("Error en la instruccion SQL");

function nota($nota){    
    
    $nota_maxima = 5;
    $porcentaje = $nota;
    
    $regla = ($porcentaje * $nota_maxima) / 100;

    return $regla;
}



?>