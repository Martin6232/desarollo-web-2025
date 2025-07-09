/* 1 y 2 */
let carrito = []
function compras() {
    let elemento = document.getElementById("lista").value;
    carrito.push(elemento)
    document.getElementById("resultado").innerHTML = `Carro: <br>-${carrito.join("<br>-")}`;
}

function comprasdelpop() {
    carrito.pop()
    document.getElementById("resultado").innerHTML = `Carro: <br>-${carrito.join("<br>-")}`;
}
/* 3 y 4 */
let colores = ["Rojo","Azul"]

document.getElementById("list").innerHTML = `Colores: ${colores.join(" - ")}`
function colors() {
    let elemento = document.getElementById("list-color").value;
    let color = elemento.trim()
    if(color === "") return;
    colores.unshift(color)
    document.getElementById("list").innerHTML = `Colores: ${colores.join(" - ")}`
}

function delcolor() {
    colores.shift()
    document.getElementById("list").innerHTML = `Colores: ${colores.join(" - ")}`
}
/* ejer 5 */
let numeros = [10, 20, 30]
document.getElementById("list-num").innerHTML = `${numeros.join(" - ")}`

function num() {
    let elemento = document.getElementById("add-num").value;
    let num = elemento.trim()
    if (num === "") return;
    numeros.unshift(num)
    document.getElementById("list-num").innerHTML = `${numeros.join(" - ")}`
}

function delnum() {
    numeros.shift()
    document.getElementById("list-num").innerHTML = `${numeros.join(" - ")}`
}