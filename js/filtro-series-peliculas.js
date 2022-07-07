$(document).ready(function(){

    $('#filtroPeliculas').click(function(){
        localStorage.setItem('Filtro', 'peliculas');
        $('.pelicula').show();
        $('.serie').hide();
    });

    $('#filtroSeries').click(function(){
        localStorage.setItem('Filtro', 'series');
        $('.serie').show();
        $('.pelicula').hide();
    });
    
    $('#home').click(function(){
        localStorage.clear('Filtro');
        $('.pelicula').show();
        $('.serie').show();
    });

    if (localStorage.getItem('Filtro') == "peliculas") {
        $('.pelicula').show();
        $('.serie').hide();
    } else if (localStorage.getItem('Filtro') == "series") {
        $('.serie').show();
        $('.pelicula').hide();
    }

})