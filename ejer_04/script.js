//1
function temperatura() {
    let grados = parseInt(prompt("¿cual es la temperatura de hoy?:"))
    if(grados < 0){
        alert("Hace frio")
        return;
    }else if(grados >= 0 && grados < 25 ) {
        alert("La temperatura es agradable");
        return;
    } else {
        alert("Hace calor");
        return;
    }
}
//2
function accesousuario() {
    let usuario = "usuario123";
    let password = "secreto";
    let respuesta = prompt("Ponga su usuario:");
    let respuesta2 = prompt("Ponga su contraseña:");
    if(usuario == respuesta && password == respuesta2) {
        alert("Acceso concedido");
        return;
    } else {
        alert("Acceso denegado");
        return;
    }
}
//3
function signos() {
    let num = parseInt(prompt("Ingresa tu numero: "));
    if(num > 0){
        alert("Tu numero es positivo");
        return;
    } else if(num < 0) {
        alert("Tu numero es negativo");
        return;
    } else {
        alert("Tu numero es cero");
        return;
    }
}
//4
function puntuacion() {
    let record = parseInt(prompt("Puntuacion"))
    if(record >= 90){
        alert("Exelente");
        return;
    }else if(record >= 70 && record <= 89) {
        alert("Buen trabajo");
        return;
    }else{
        alert("Necesitas mejorar");
    }
}
//5
function verificar() {
    let edad = parseInt(prompt("Ingresa tu edad"))
    let condiciones = prompt("Aceptas las condiciones")
    if(edad >= 18 && condiciones == "si") {
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado")
    }
}

function descuento() {
    let edad = parseInt(prompt("Ingresa tu edad"))
    let quest = prompt("Eres estudiante")
    if(edad > 60 || quest == "si") {
        alert("Descuento aplicado")
    } else {
        alert("No tienes descuento")
    }
}