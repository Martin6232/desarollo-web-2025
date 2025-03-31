function multiplicar() {
    let num = parseInt(prompt("Ingresa tu numero: "));
    let datos = [];
    let resultados = 0;
    for (let mult = 1; mult <= 10; mult++) {
        resultados = num * mult;
        datos.push(`${mult} * ${num} = ${resultados}`);
        if(mult >= 10){
        alert(datos.join(`\n`));
        }
    }
}

function ingresar() {
    let n = parseInt(prompt("Ingresa tu numero: "));

}