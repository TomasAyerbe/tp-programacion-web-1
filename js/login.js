$(document).ready(function(){  
    $('.boton-login').prop('disabled', true);

    $('input').change(function(){
        if ( ($('#user').val().length > 0) && ((/^(?=.{2,}\d)(?=.{2,}[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])(?=.{2,}[a-zA-Z]).{8,}$/.test($('#password').val()))) ) {
            $('.boton-login').prop('disabled', false);
        }
    });
    
    $('.boton-login').click(function(){
        localStorage.setItem('Nombre de Usuario', $('#user').val());
    });
});