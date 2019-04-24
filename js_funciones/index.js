$(document).ready(function() {
  
        
    table = $('#tabla').DataTable( {
        "ajax": {
        "method": "POST",
        "url": "../funciones/listar_estudiantes.php",
        "data": {}
         }
    
      });

    
      $('#tabla tbody').on( 'click',"td", function () {
        var data = table.row( $(this).parents('tr') ).data();
    
        $("#texto_1").html("Detalles medidas: "+data[1]);

        $('#datos').DataTable().clear();
        $('#datos').DataTable().destroy();
        tabla = $('#datos').DataTable( {
            "ajax": {
            "method": "POST",
            "url": "../funciones/listar_medidas.php",
            "data": {'cedula': data[0]}
             }
        
          });

     
        

      })


})