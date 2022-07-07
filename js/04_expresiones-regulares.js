let regexNumero=/^[0-9]+$/;
let regexLetras=/^[A-Za-z]+$/;
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

let form=document.getElementById("form");
form.onsubmit=function(e){
    let error=false;
    mensajesError="";
    let email=document.getElementById("email").value;
    if(!regexEmail.test(email)){
        error=true;
        mensajesError+="<p>El email tiene que respetar el formato</p>";
    }
    if(error){
        e.preventDefault();
        document.getElementById("mensaje").innerHTML=mensajesError;
    }
}