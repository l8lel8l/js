function login(){
    var usuario = "yaguar";
    var pass = "1234";
    if( usuario == "yaguar" && pass == "1234" ){
        alert("Acceso concedido");
    }else{
        alert("Acceso denegado");
    }
}
function cambiarNombre(){
    var texto = document.getElementById("idTexto");
    var nombreCambiante = prompt("Cuál es tú nombre?","Esteban");
    texto.innerHTML= nombreCambiante;
}