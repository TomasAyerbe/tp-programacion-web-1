$(document).ready(function(){

    var correoValido = false;
    var usuarioValido = false;
    
    $('.error-correo').hide();
    $('.error-usuario').hide();
    $('#boton-confirmar').prop('disabled', true);

    $('#email').keyup(function(){
        let email = $(this).val();

        if (/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/.test(email)) {
            correoValido = true;
            $('.error-correo').hide();
        } else {
            correoValido = false;
            $('#boton-confirmar').prop('disabled', true);
            $('.error-correo').show();
        }
    });

    $('#nombre-de-usuario').keyup(function(){
        let usuario = $(this).val();

        if (/^[0-9A-Za-z]+$/.test(usuario)) {
            usuarioValido = true;
            $('.error-usuario').hide();
        } else {
            usuarioValido = false;
            $('#boton-confirmar').prop('disabled', true);
            $('.error-usuario').show();
        }
    });

    $('input').keyup(function(){
        if (correoValido && usuarioValido) {
            $('#boton-confirmar').prop('disabled', false);
        } else {
            $('#boton-confirmar').prop('disabled', true);
        }
    });

});