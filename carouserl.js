const fila = document.querySelector('.contenedor-series-pelis');
const flechaIzquierda = document.getElementById('flecha-izq');
const flechaDerecha = document.getElementById('flecha-der');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;    
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;    
});

fila.style.transform = `translateX`

/*******************************************************************/
/*TEMPORADAS Y CAPITULOS*/

function change(temporadas,capitulos){
    temporadas=document.getElementById(temporadas);
    capitulos=document.getElementById(capitulos);

    capitulos.value="";
    capitulos.innerHTML = "";

    if(temporadas.value== "1"){
        var optionArray = ["Capitulo 1|Capitulo 1", "Capitulo 2|Capitulo 2","Capitulo 3|Capitulo 3","Capitulo 4|Capitulo 4","Capitulo 5|Capitulo 5","Capitulo 6|Capitulo 6","Capitulo 7|Capitulo 7","Capitulo 8|Capitulo 8","Capitulo 9|Capitulo 9","Capitulo 10|Capitulo 10","Capitulo 11|Capitulo 11","Capitulo 12|Capitulo 12","Capitulo 13|Capitulo 13"];
    }else if(temporadas.value == "2"){
        var optionArray = ["Capitulo 1|Capitulo 1", "Capitulo 2|Capitulo 2","Capitulo 3|Capitulo 3","Capitulo 4|Capitulo 4","Capitulo 5|Capitulo 5","Capitulo 6|Capitulo 6","Capitulo 7|Capitulo 7","Capitulo 8|Capitulo 8","Capitulo 9|Capitulo 9"];
    }else if(temporadas.value == "3"){
        var optionArray = ["Capitulo 1|Capitulo 1", "Capitulo 2|Capitulo 2","Capitulo 3|Capitulo 3","Capitulo 4|Capitulo 4","Capitulo 5|Capitulo 5","Capitulo 6|Capitulo 6","Capitulo 7|Capitulo 7","Capitulo 8|Capitulo 8"];
    }else if(temporadas.value == "4"){
        var optionArray = ["Capitulo 1|Capitulo 1", "Capitulo 2|Capitulo 2","Capitulo 3|Capitulo 3","Capitulo 4|Capitulo 4","Capitulo 5|Capitulo 5","Capitulo 6|Capitulo 6","Capitulo 7|Capitulo 7","Capitulo 8|Capitulo 8","Capitulo 9|Capitulo 9","Capitulo 10|Capitulo 10","Capitulo 11|Capitulo 11" ];
    }else if(temporadas.value == "5"){
        var optionArray = ["Capitulo 1|Capitulo 1", "Capitulo 2|Capitulo 2","Capitulo 3|Capitulo 3","Capitulo 4|Capitulo 4","Capitulo 5|Capitulo 5","Capitulo 6|Capitulo 6","Capitulo 7|Capitulo 7","Capitulo 8|Capitulo 8","Capitulo 9|Capitulo 9","Capitulo 10|Capitulo 10"];
    }else if(temporadas.value == "0"){
        var optionArray = ["Seleccionar capitulo|Seleccionar capitulo"];
    }

    for(option = 0; option < optionArray.length; option++){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        capitulos.options.add(newOption);
    };
}

