$(document).ready(function(){

    $('#categoria').change(function(){
        let inicial = $(this).val();
        
        $('.accion').show();
        $('.aventura').show();
        $('.ciencia-ficcion').show();
        $('.crimen').show();
        $('.drama').show();
        $('.ficcion-historica').show();
        $('.suspenso').show();
        
        switch (inicial) {
            case '1':
                $('.aventura:not(.accion)').hide();
                $('.ciencia-ficcion:not(.accion)').hide();
                $('.crimen:not(.accion)').hide();
                $('.drama:not(.accion)').hide();
                $('.ficcion-historica:not(.accion)').hide();
                $('.suspenso:not(.accion)').hide();
            break;
            case '2':
                $('.accion:not(.aventura)').hide();
                $('.ciencia-ficcion:not(.aventura)').hide();
                $('.crimen:not(.aventura)').hide();
                $('.drama:not(.aventura)').hide();
                $('.ficcion-historica:not(.aventura)').hide();
                $('.suspenso:not(.aventura)').hide();
            break;
            case '3':
                $('.accion:not(.ciencia-ficcion)').hide();
                $('.aventura:not(.ciencia-ficcion)').hide();
                $('.crimen:not(.ciencia-ficcion)').hide();
                $('.drama:not(.ciencia-ficcion)').hide();
                $('.ficcion-historica:not(.ciencia-ficcion)').hide();
                $('.suspenso:not(.ciencia-ficcion)').hide();
            break;
            case '4':
                $('.accion:not(.crimen)').hide();
                $('.aventura:not(.crimen)').hide();
                $('.ciencia-ficcion:not(.crimen)').hide();
                $('.drama:not(.crimen)').hide();
                $('.ficcion-historica:not(.crimen)').hide();
                $('.suspenso:not(.crimen)').hide();
            break;
            case '5':
                $('.accion:not(.drama)').hide();
                $('.aventura:not(.drama)').hide();
                $('.ciencia-ficcion:not(.drama)').hide();
                $('.crimen:not(.drama)').hide();
                $('.ficcion-historica:not(.drama)').hide();
                $('.suspenso:not(.drama)').hide();
            break;
            case '6':
                $('.accion:not(.ficcion-historica)').hide();
                $('.aventura:not(.ficcion-historica)').hide();
                $('.ciencia-ficcion:not(.ficcion-historica)').hide();
                $('.crimen:not(.ficcion-historica)').hide();
                $('.drama:not(.ficcion-historica)').hide();
                $('.suspenso:not(.ficcion-historica)').hide();
            break;
            case '7':
                $('.accion:not(.suspenso)').hide();
                $('.aventura:not(.suspenso)').hide();
                $('.ciencia-ficcion:not(.suspenso)').hide();
                $('.crimen:not(.suspenso)').hide();
                $('.drama:not(.suspenso)').hide();
                $('.ficcion-historica:not(.suspenso)').hide();
            break;
        }
    });

});