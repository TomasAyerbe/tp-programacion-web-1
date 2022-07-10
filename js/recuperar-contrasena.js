
/* la funcion validar como indica su nombre, hace validaciones usando los selectores, si no se cumplen las validaciones salen mensajes y se acumulan errores*/
function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //expresion regular para emails validos
    var mensaje =""; //variable que va a almacenar todos los mensajes de error
    var error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. 
                            En caso de que su valor sea 0, retornara verdadero y el formulario se enviara. En el caso de que sea mayor a 0 retornara falso.*/
    reset();
    if(!$("#email").val().match(regexemail)){ //Valida al mail
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error');
    }
    if($("#Usuario").val()==""){ /*valida que usuario no este vacio*/
        mensaje+="<p>El campo usuario es obligatorio</p>"
        error++;
        $("#Usuario").addClass('error');
    }
    if (error>0){
        $("#mensaje").append(mensaje); //agregamos al div de id mensaje, los mensajes de error acumulados en la variable mensaje
        $(".boton-enviar").click(function(){ //No te dejar usar el boton enviar, esta desahabilitado
            $(".boton-enviar").disabled()==true;
        })
        return false;
    }
      /*Sino retorna verdadero y el formulario se envía*/
      else{
        $(".boton-enviar").click(function(){ //Una ves que se cumplen las condiciones de validar, el boton enviar esta habilitado y se puede usar
            $(".boton-enviar").enable()==true;
        })
        return true;
    }
}

function reset(){ /*Esta funciona elimina todas las clases de error*/
    $("#Usuario").removeClass('error');
    $("#email").removeClass('error');
    $("#mensaje").empty(); //vaciamos el contenido del div de id mensaje
}

$(document).ready(function(){

    $("#form").submit(function() {
        return validar();
    });
    $("#email").keyup(function() {
        validar("#email");
    });
    $("#Usuario").keyup(function() {
        validar("#Usuario");
    });
}); 