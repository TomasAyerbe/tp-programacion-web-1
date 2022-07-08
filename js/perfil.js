function descomponerNumero(n){
    return [...n + ''].map(Number);
}

$(document).ready(function(){
    
    var error = 0;
    $('.error-contrasena').hide();
    $('.error-tarjeta').hide();
    $('input[type="number"]').prop('disabled', true);
    $('#guardar-cambios').prop('disabled', true);
    $('.cupon').prop('disabled', true);
    $('.cupon').prop('checked', false);

    //mostrar el nombre del usuario debajo de la imagen.
    $('.nombre-usuario').text(localStorage.getItem('Nombre de Usuario'));

    $('input[type="password"]').keyup(function(){
        let password1 = $('#password-1').val();
        let password2 = $('#password-2').val();
        
        if (password1 == password2) {
            if (/^(?=.{2,}\d)(?=.{2,}[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])(?=.{2,}[a-zA-Z]).{8,}$/.test(password1)) {
                $('#guardar-cambios').prop('disabled', false);
                $('.error-contrasena').hide();
            } else {
                $('.error-contrasena').show();
            }
        } else {
            $('.error-contrasena').show();
        }
    });

    $('input[name="pago"]').click(function(){
        var radio = $('input:radio[name="pago"]:checked').val();
        $('input[type="number"]').prop('disabled', true);
        $('.cupon').prop('disabled', true);

        if (radio == "tarjeta") {
            $('input[type="number"]').prop('disabled', false);
            
            $('#codigo-seguridad').keyup(function () {
                let codigoTarjeta = $('#codigo-seguridad').val();

                //El campo clave de la tarjeta solo acepta 3 números distintos de cero.
                if (/^([1-9]){3}$/.test(codigoTarjeta)) {
                    error = 0;
                } else {
                    error++;
                }

                if (error == 0) {
                    $('.error-tarjeta').hide();
                    $('#guardar-cambios').prop('disabled', false);
                } else {
                    //Debe aparecer un mensaje de error si la tarjeta es inválida.
                    $('.error-tarjetar').show();
                    $('#guardar-cambios').prop('disabled', true);
                }
            });
    
            $('#numero-tarjeta').keyup(function () {
                let numeroTarjeta = $('#numero-tarjeta').val();

                //El campo tarjeta de crédito solo debe aceptar números con una longitud de entre 16 y 19 dígitos.
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

                //Habilita el botón guardar cambios
                if (error == 0) {
                    $('.error-tarjeta').hide();
                    $('#guardar-cambios').prop('disabled', false);
                } else {
                    //Debe aparecer un mensaje de error si la tarjeta es inválida.
                    $('.error-tarjeta').show();
                    $('#guardar-cambios').prop('disabled', true);
                }
            });
        } else if (radio == "cupon") {            
            $('.cupon').prop('disabled', false);

            $('.cupon').change(function(){
                $('#guardar-cambios').prop('disabled', false);
                $('.cupon').not(this).prop('checked', false); 
            });
        } else if (radio == "transferencia") {
            $('#guardar-cambios').prop('disabled', false);
        }
    });

    $('input[type="submit"]').click(function(){
        localStorage.clear();

        let metodoPago = $('input:radio[name="pago"]:checked').val();
       
        localStorage.setItem('Método de pago', metodoPago);
        
        if (metodoPago == "tarjeta") {
            let nroTarjeta = $('#numero-tarjeta').val();
            localStorage.setItem('Número de tarjeta', nroTarjeta);
            let codTarjeta = $('#codigo-seguridad').val();
            localStorage.setItem('Código de seguridad', codTarjeta);
        } else if (metodoPago == "cupon") {
            let lugarPago = $('.cupon').val();
            localStorage.setItem('Lugar de pago', lugarPago);
        }
    });

});

