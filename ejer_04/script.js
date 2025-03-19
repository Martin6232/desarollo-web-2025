function temperatura() {
    let grados = parseInt(prompt("¿cual es la temperatura de hoy?:"))
    if(grados < 0){
        alert("Hace frio")
        return;
    } if(grados >= 0 && grados < 25 ) {
        alert("La temperatura es agradable");
        return;
    } else {
        alert("Hace calor");
        return;
    }
}
let usuario = "usuario123";
let password = "secreto";
function accesousuario() {
    let usuario = "usuario123";
let password = "secreto";
    let respuesta = prompt("Ponga su usuario:");
    let respuesta2 = prompt("Ponga su contraseña:");
    if(usuario == respuesta && usuario == respuesta2) {
        alert("Acceso concedido");
        return;
    } else {
        alert("Acceso denegado");
        return;
    }
}