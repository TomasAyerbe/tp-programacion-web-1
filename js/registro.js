function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //expresion regular para emails validos
    var mensaje =""; //variable que va a almacenar todos los mensajes de error
    var error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. 
                            En caso de que su valor sea 0, retornara verdadero y el formulario se enviara. En el caso de que sea mayor a 0 retornara falso.*/
    var regexLetras=/^[A-Za-z]+$/; //expresion regular para validar solo letras
    var regexLetrasNumeros=/^[0-9A-Za-z]+$/;
    let regexContraseña = /^(?=.{2,}[A-Za-z])(?=.{2,}\d)(?=.{2,}[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/;

    reset();
    if (!$("#nombre").val().match(regexLetras)){ /*valida que nombre sean solo letras y no este vacio*/
       /* console.log($("#nombre").val()) */
        mensaje+= "<p>El campo nombre es obligatorio y solo puede contener letras </p>";
        error++;
        $("#nombre").addClass('error');
    }
    if(!$("#apellido").val().match(regexLetras)){
        mensaje+= "<p>El campo apellido es obligatorio y solo puede contener letras </p>";
        error++;
        $("#apellido").addClass('error');
    }
    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error');
    }
     if(!$("#nombre-de-usuario").val().match(regexLetrasNumeros)) {
        mensaje+= "<p>Usuario solo acepta tener letras y numeros</p>";
        error++;
        $("#nombre-de-usuario").addClass('error');
     }

    /*Si error es mayor a 0 retorna falso y muestra todo los mensajes de errores acumulado en la variable mensaje*/
    if (error>0){

        $("#mensaje").append(mensaje); //agregamos al div de id mensaje, los mensajes de error acumulados en la variable mensaje
        return false;
    }
    /*Sino retorna verdadero y el formulario se envía*/
    else{
        return true;
    }

}
function reset(){ /*Esta funciona elimina todas las clases de error*/
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#email").removeClass('error');
    $("#mensaje").empty(); //vaciamos el contenido del div de id mensaje
}

$(document).ready(function() {

    $("#form").submit(function() {
        return validar();
    });
    $("#nombre").keyup(function() {
        validar();
    });
    $("#apellido").keyup(function() {
        validar();
    });
    $("#email").keyup(function() {
        validar();
    });
    $("#nombre-de-usuario").keyup(function(){
        validar();
    });
    
});