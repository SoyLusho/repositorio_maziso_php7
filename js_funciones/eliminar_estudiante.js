$(document).ready(function() {

    cargar_lista();

    function cargar_lista() {
            
    table = $('#tabla').DataTable( {
    "ajax": {
    "method": "POST",
    "url": "../../funciones/listar_estudiantes_eliminar.php",
    "data": {}
     },
    "columnDefs": [ {
    "targets": 2,
    "data": null,
    "defaultContent": "<button id='eliminar' type='button' class='btn btn-danger'>Eliminar</button>"}

   ]

  });

}

$('#tabla tbody').on( 'click',"#eliminar", function () {
    var data = table.row( $(this).parents('tr') ).data();

    $.ajax({
        
        type: 'POST',
        url: '../../funciones/eliminar_estudiante_por_codigo.php',
        data: {'codigo': data[0]}
        
    })
    .done(function(respuesta){
          
    swal('¡Bien hecho!','Se ha eliminado el estudiante satisfactoriamente','success')   
    $('#tabla').DataTable().clear();
    $('#tabla').DataTable().destroy();
    cargar_lista();

    })
    .fail(function(){
        sweetAlert('¡Error!','Se produjo un error y no se elimino el estudiante, por favor vuelve a intentarlo','error')
    }) 
 
    

  })



  $('#boton_eliminar').on('click',function(){


    $.ajax({
        
        type: 'POST',
        url: '../../funciones/eliminar_estudiantes.php',
        data: {}
        
    })
    .done(function(respuesta){
          
    alert(respuesta)    
    swal('¡Bien hecho!','Se ha eliminado todos los estudiantes satisfactoriamente','success')   
    $('#tabla').DataTable().clear();
    $('#tabla').DataTable().destroy();
    cargar_lista();

    })
    .fail(function(){
        sweetAlert('¡Error!','Se produjo un error y no se elimino los estudiantes, por favor vuelve a intentarlo','error')
    }) 

    

  })  












})  