$(document).ready(function() {

    $('#guardar').on('click',function(){

    var nombre = $('#nombre').val();
    var apellidos = $('#apellidos').val();
    var documento = $('#documento').val();   
    var cabeza = $('#cabeza').val();
    var pierna = $('#pierna').val();
    var brazo = $('#brazo').val(); 
    var expresion_numeros = /^\d*$/;
    var ok  = true;
    
    if(nombre.trim() === "" ){
    ok=false;
    sweetAlert('¡Error!', 'Olvidaste escribir el nombre del estudiante', 'error');
    }else{
    ok=true;
    if(apellidos.trim() === "" ){
    ok=false;
    sweetAlert('¡Error!', 'Olvidaste escribir los apellidos del estudiante', 'error');
    }else{
    ok=true;  
    if(documento.trim() === "" ){
    sweetAlert('¡Error!', 'Olvidaste escribir el numero de documento del estudiante', 'error');
    ok=false;
    }else{
    ok=true;
    if(!expresion_numeros.test(documento)){
    ok=false
    sweetAlert('¡Error!', 'Unicamente se deben introducir numeros en el campo de numero de documento', 'error');
    }else{
    ok=true;
    if(cabeza.trim() === "" ){
    sweetAlert('¡Error!', 'Olvidaste escribir la calificacion de cabeza del estudiante', 'error');
    ok=false;
    }else{
    ok=true;
    if(!expresion_numeros.test(cabeza)){
    ok=false
    sweetAlert('¡Error!', 'Unicamente se deben introducir numeros en el campo de calificacion de cabeza', 'error');
    }else{
    ok=true;
    if(cabeza < 0 || cabeza > 100){
    ok=false
    sweetAlert('¡Error!', 'La calificacion debe ser entre 0 y 100', 'error');
    }else{
    ok=true;
    if(pierna.trim() === "" ){
    sweetAlert('¡Error!', 'Olvidaste escribir la calificacion de pierna del estudiante', 'error');
    ok=false;
    }else{
    ok=true;
    if(!expresion_numeros.test(pierna)){
    ok=false
    sweetAlert('¡Error!', 'Unicamente se deben introducir numeros en el campo de calificacion de pierna del estudiante', 'error');
    }else{
    ok=true;
    if(pierna < 0 || pierna > 100){
    ok=false
    sweetAlert('¡Error!', 'La calificacion debe ser entre 0 y 100', 'error');
    }else{
    ok=true;
    if(brazo.trim() === "" ){
    sweetAlert('¡Error!', 'Olvidaste escribir la calificacion de brazo del estudiante', 'error');
    ok=false;
    }else{
    ok=true;
    if(!expresion_numeros.test(brazo)){
    ok=false
    sweetAlert('¡Error!', 'Unicamente se deben introducir numeros en el campo de califacion de brazo del estudiante', 'error');
    }else{
    ok=true;
    if(brazo < 0 || brazo > 100){
    ok=false
    sweetAlert('¡Error!', 'La calificacion debe ser entre 0 y 100', 'error');
    }else{
    ok=true;
    }
    }
    }    
    }
    }
    }    
    }
    }
    }    
    }
    }    
    }
    }           


    if(ok == true ){

        $.ajax({
 
        type: 'POST',
        url: '../funciones/registrar_estudiante.php',
        data: {
        'documento': documento,
        'nombre': nombre,
        'apellidos': apellidos,
        'cabeza': cabeza,
        'pierna': pierna,
        'brazo': brazo
        }
        }).done(function (respuesta) {     
 
        alert(respuesta)    

        swal('¡Bien hecho!','Se ha registrado exitosamente','success')

        $("#documento").val("");
        $("#nombre").val("");
        $("#apellidos").val("");
        $("#cabeza").val("");
        $("#brazo").val("");
        $("#pierna").val("");
 
        }).fail(function (){
        sweetAlert('¡Error!','ha ocurrido un error y no se registraron los datos, por favor vuelve a intentarlo','error');
        })
 
        }




    })    


})