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