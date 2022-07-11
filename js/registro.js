function validarTarjeta(numeroTarjeta) {
    var error = 0;

    if (!/^([0-9]){16,19}$/.test(numeroTarjeta)) {
        error++;
    } else {
        error = 0;
    }

    let numerosTarjeta = [];
    numerosTarjeta = descomponerNumero(numeroTarjeta);
    let sumaNumerosTarjeta = 0;

    for (var i = 0; i < numerosTarjeta.length - 1; i++) {
        sumaNumerosTarjeta += numerosTarjeta[i];
    }

    //El último número de la tarjeta debe ser par si la suma de todos los números anteriores (el último no cuenta) es un número impar.
    if ((sumaNumerosTarjeta % 2 == 0) || !(numerosTarjeta[numerosTarjeta.length - 1] % 2 == 0)) {
        error++;
    } else {
        error = 0;
    }

    //El último número de la tarjeta debe ser impar si la suma de todos los números anteriores (el último no cuenta) es un número par.
    if (!(sumaNumerosTarjeta % 2 == 0) || (numerosTarjeta[numerosTarjeta.length - 1] % 2 == 0)) {
        error++;
    } else {
        error = 0;
    }

    if (error > 0) {
        return false;
    } else {
        return true;
    }
}

function descomponerNumero(n) {
    return [...n + ''].map(Number);
}

$(document).ready(function(){
    
    var nombreValido = false;
    var apellidoValido = false;
    var correoValido = false;
    var usuarioValido = false;
    var contrasenaValida = false;
    var metodoValido = false;
    
    $('.error-nombre').hide();
    $('.error-apellido').hide();
    $('.error-correo').hide();
    $('.error-usuario').hide();
    $('.error-contrasena').hide();
    $('.error-metodo').hide();
    $('input[type="number"]').prop('disabled', true);
    $('.cupon').prop('disabled', true);
    $('#pago-facil').prop('checked', true);
    $('#rapi-pago').prop('checked', false);
    $('#boton-confirmar').prop('disabled', true);

    $('#nombre').keyup(function(){
        let nombre = $(this).val();

        if (/^[A-Za-z]+$/.test(nombre)) {
            nombreValido = true;
            $('.error-nombre').hide();
        } else {
            nombreValido = false;
            $('#boton-confirmar').prop('disabled', true);
            $('.error-nombre').show();
        }
    });

    $('#apellido').keyup(function(){
        let apellido = $(this).val();

        if (/^[A-Za-z]+$/.test(apellido)) {
            apellidoValido = true;
            $('.error-apellido').hide();
        } else {
            apellidoValido = false;
            $('#boton-confirmar').prop('disabled', true);
            $('.error-apellido').show();
        }
    });

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

    $('input[type="password"]').keyup(function(){
        let password1 = $('#password-1').val();
        let password2 = $('#password-2').val();
        
        if (password1 == password2) {
            if (/^(?=.{2,}\d)(?=.{2,}[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])(?=.{2,}[a-zA-Z]).{8,}$/.test(password1)) {
                contrasenaValida = true;
                $('.error-contrasena').hide();
            } else {
                contrasenaValida = false;
                $('#boton-confirmar').prop('disabled', true);
                $('.error-contrasena').show();
            }
        } else {
            contrasenaValida = false;
            $('#boton-confirmar').prop('disabled', true);
            $('.error-contrasena').show();
        }
    });

    $('input[name="pago"]').click(function(){
        var radio = $('input:radio[name="pago"]:checked').val();
        $('input[type="number"]').prop('disabled', true);
        $('.cupon').prop('disabled', true);

        if (radio == "tarjeta") {
            $('input[type="number"]').prop('disabled', false);
            
            $('input[name="tarjeta"]').keyup(function(){
                let numeroTarjeta = $('#numero-tarjeta').val();
                let codigoTarjeta = $('#codigo-seguridad').val();
                
                if ( validarTarjeta(numeroTarjeta) && (/^([1-9]){3}$/.test(codigoTarjeta)) ) {
                    metodoValido = true;
                    $('.error-metodo').hide();
                } else {
                    metodoValido = false;
                    $('#boton-confirmar').prop('disabled', true);
                    $('.error-metodo').show();
                }
            });
        } else if (radio == "cupon") {            
            $('.cupon').prop('disabled', false);
            
            $('.cupon').change(function(){
                $('.cupon').not(this).prop('checked', false); 
            });

            metodoValido = true;
            $('.error-metodo').hide();
        } else if (radio == "transferencia") {
            metodoValido = true;
            $('.error-metodo').hide();
        }  
    });

    $('input').change(function(){
        if (nombreValido && apellidoValido && correoValido && usuarioValido && contrasenaValida && metodoValido) {
            $('#boton-confirmar').prop('disabled', false);
        } else {
            $('#boton-confirmar').prop('disabled', true);
        }
    });

});