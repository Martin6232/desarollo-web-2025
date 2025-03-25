function numero() {
    let numero = parseInt(prompt("Ingresa algun numero"));
    if( numero % 2 == 0) { // % guarda el resto de la operacion ejem 5 / 2 = 1 y 5 % 2 = 1
        alert("Es par");
    } else {
        alert("Es impar");
    }
}

function imc() {
    let peso = parseInt(prompt("¿Cuanto pesas?"));
    let altura = parseFloat(prompt("Cuanto mides"));
    let calc = peso / (altura * altura);
    if (calc < 18.5) {
        alert("Bajo peso");
        return;
    } else if(calc >= 18.5 && calc <= 24.9){
        alert("Peso normal");
        return;
    } else if(calc >= 25) {
        alert("Sobrepeso");
    }
}

function promedio() {
    let nota = parseFloat(prompt("Pon tu nota:"));
    let nota2 = parseFloat(prompt("Pon tu nota:"));
    let nota3 = parseFloat(prompt("Pon tu nota:"));
    let promedio = (nota + nota2 + nota3) / 3;
    if (promedio < 4.0) {
        alert("Tu promedio es " + promedio +" estas !Reprobado¡")
    } else {
        alert("Tu promedio es " + promedio +" estas !Aprobado¡")
    }

}