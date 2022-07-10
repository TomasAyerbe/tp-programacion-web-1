
/* la funcion validar como indica su nombre, hace validaciones usando los selectores, si no se cumplen las validaciones salen mensajes y se acumulan errores*/
function validar(){
    let mensaje =""; //variable que va a almacenar todos los mensajes de error
    let error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. */
    reset();
    if($("#user").val()==""){
        mensaje+="<p>El campo usuario es obligatorio y debe estar completo</p>"
        error++;
        $("#user").addClass('error');
    }
    if($("#password").val()==""){
        mensaje+="<p>El campo contraseña es obligatorio y debe estar completo</p>"
        error++;
        $("#password").addClass('error');
    }

    if (error>0){

        $("#mensaje").append(mensaje); //agregamos al div de id mensaje, los mensajes de error acumulados en la variable mensaje
        return false;
    }
      /*Sino retorna verdadero y el formulario se envía*/
      else{
        return true;
    }

   }
 /* la funcion reset sirve para cuando se validaron los selectores, limpia la clase error que tenia los mensajes */
   function reset(){
    $("#user").removeClass('error');
    $("#password").removeClass('error');
    $("#mensaje").empty(); //vaciamos el contenido del div de id mensaje
   
   }

   
$(document).ready(function(){  
  /*   $('.boton-login').prop('disabled', true); funciona, pero no te deja enviar despues el formulario o ir a la otra pagina la home */
 
  //Si el return validar es true envia el formulario
   $("#form").submit(function(){
          return validar();
   });
   $("#user").keyup(function(){
    return validar();
   });
   $("#password").keyup(function(){
    return validar();
   });
 //agrego el nombre de usuario al localStorage
   $('.boton-login').click(function(){
    localStorage.setItem('Nombre de Usuario', $('#user').val());
   });

  /* $('.boton-login').prop('enable', true); */

});




 /*   $('.boton-login').prop('disabled', true);

    $('input').change(function(){
        if ( ($('#user').val().length > 0) && ((/^(?=.{2,}\d)(?=.{2,}[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])(?=.{2,}[a-zA-Z]).{8,}$/.test($('#password').val()))) ) {
            $('.boton-login').prop('disabled', false);
        }
    });
    
    $('.boton-login').click(function(){
        localStorage.setItem('Nombre de Usuario', $('#user').val());
    });
    */