/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = [];
function mostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; //Limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); // Agregar valor al final

    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento(){
    if (carrito.length > 0){
        carrito.pop();
    }
    mostrarListaCompra()
}
/* 3 y 4 ----------------------------------------------------------------------------------------- */
let list_col = ["Rojo","Azul"]
document.getElementById("resultado3").innerHTML = `${list_col.join(" - ")}`

function addcol() {
    let col = document.getElementById("lista3").value;
    if (col === "") return;
    list_col.unshift(col);
    document.getElementById("resultado3").innerHTML = `${list_col.join(" - ")}`
}

function delcol() {
    list_col.shift();
    document.getElementById("resultado3").innerHTML = `${list_col.join(" - ")}`
}
/* ejer 5 --------------------------------------------------------------------------------------- */
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

function lastnum() {
    let elemento = document.getElementById("add-num").value;
    let num = elemento.trim()
    if (num === "") return;
    numeros.push(num)
    document.getElementById("list-num").innerHTML = `${numeros.join(" - ")}`
}

function delastnum() {
    numeros.pop()
    document.getElementById("list-num").innerHTML = `${numeros.join(" - ")}`
}
/* ejer 6 ------------------------------------------------------------------------------------------------ */
