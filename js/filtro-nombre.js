$(document).ready(function() {

    $("#grilla a").each(function () {
        $(this).attr("data-search-term", $(this).text().toLowerCase());
    });
  
    $(".buscar-nombre").on("keyup", function () {
        $("#grilla a").show();
        
        var searchTerm = $(this).val().toLowerCase();
  
        $("#grilla a").each(function () {
            if (searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).toggle($(this).filter('[data-search-term*="' + searchTerm + '"]').length > 0);
            }
        });
    });

});
