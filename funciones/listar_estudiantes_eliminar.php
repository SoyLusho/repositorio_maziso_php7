<?php


function listar_estudiantes(){
  
  include("configuracion.php");        

    $consulta = "SELECT 
    usuarios.nombres,
    usuarios.apellidos,
    evaluacion.cabeza,
    evaluacion.brazo,
    evaluacion.pierna,
    usuarios.cedula

    FROM
    
     usuarios,
     evaluacion

     WHERE

     evaluacion.cedula = usuarios.cedula
     
     ;";
    
    $resultado = $mysql->query("$consulta") or die("Error en la instruccion SQL");
    
    $apertura ='{ "data": [';
    $cierre =']}';
    $tabla =  "";  
                  
    while ($row = mysqli_fetch_array($resultado)){ 
        
    $promedio = ($row[2]+$row[3]+$row[4])/3;    

    $tabla .= formateador($row[5],$row[0]." ".$row[1]);     
     
    }     
    
    $tabla = substr ($tabla, 0, strlen($tabla) - 1);
    $tabla = $apertura.$tabla.$cierre;
    
    mysqli_free_result($resultado); 
 
    mysqli_close($mysql); 

    return $tabla;
    
    
}
echo listar_estudiantes();


function formateador($cedula,$nombre_estudiante){
  
 $fragmento2 = '[ "'; 
 $fragmento3 = '", "';
 $fragmento4 = '" ],';
 
 $tabla = "$fragmento2$cedula$fragmento3$nombre_estudiante$fragmento4";   

 return $tabla;     
      
  }













?>