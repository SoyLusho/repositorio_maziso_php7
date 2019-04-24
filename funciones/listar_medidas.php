<?php

function listar_medidas(){

    include("configuracion.php");
    
    $cedula = $_POST['cedula'];

    $consulta = "SELECT 
    evaluacion.cabeza,
    evaluacion.brazo,
    evaluacion.pierna

    FROM
    
    evaluacion

    WHERE
    evaluacion.cedula = '$cedula' ;";
    
    $resultado = $mysql->query("$consulta") or die("Error en la instruccion SQL");
    
    $apertura ='{ "data": [';
    $cierre =']}';
    $tabla =  "";  
   
    while ($row = mysqli_fetch_array($resultado)){ 
        

    $tabla .= formateador(conversion($row[0]),conversion($row[1]),conversion($row[2]));     
     
    }     
    
    $tabla = substr ($tabla, 0, strlen($tabla) - 1);
    $tabla = $apertura.$tabla.$cierre;
    
    return $tabla;
    
    
}
echo listar_medidas();


function formateador($cabeza,$brazo,$pierna){
  
 $fragmento2 = '[ "'; 
 $fragmento3 = '", "';
 $fragmento4 = '" ],';
 
 $tabla = "$fragmento2$cabeza$fragmento3$brazo$fragmento3$pierna$fragmento4";   

 return $tabla;     
      
 }


 function conversion ($nota){  
 
    
  $regla = ($nota * 100) /5;

  return $regla;


}














?>