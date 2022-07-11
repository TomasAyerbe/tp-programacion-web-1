$(document).ready(function () {

  var usuarioValido = false;
  var contrasenaValida = false;

  $('.error-usuario').hide();
  $('.error-contrasena').hide();
  $('#boton-confirmar').prop('disabled', true);

  $('#nombre-de-usuario').keyup(function () {
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

  $('#password').keyup(function () {
    let password = $(this).val();

    if (/^(?=.{2,}\d)(?=.{2,}[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])(?=.{2,}[a-zA-Z]).{8,}$/.test(password)) {
      contrasenaValida = true;
      $('.error-contrasena').hide();
    } else {
      contrasenaValida = false;
      $('#boton-confirmar').prop('disabled', true);
      $('.error-contrasena').show();
    }
  });

  $('input').keyup(function () {
    if (usuarioValido && contrasenaValida) {
      $('#boton-confirmar').prop('disabled', false);
    } else {
      $('#boton-confirmar').prop('disabled', true);
    }
  });

  $('#boton-confirmar').click(function(){
    localStorage.setItem('Nombre de Usuario', $('#nombre-de-usuario').val());
   });

});