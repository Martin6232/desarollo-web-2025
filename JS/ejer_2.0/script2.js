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
let list = []
let number = 3
function add() {
    for(let cont = 1; number >= cont; number--){
        list.unshift(number)
    }
    document.getElementById("resultado4").innerHTML = `${list.join(" - ")}`
}
/* ejer 7 ------------------------------------------------------------------------------------------------ */
let historial = []
let eliminado = []
let cont = 0
function mensaje() {
    let elemento = document.getElementById("mensaje").value;
    if(elemento === "")return;
    if(cont <= 2){
        historial.push(elemento)
        cont++
        if(cont === 3) {
            historial.pop()
            eliminado.push(elemento)
            document.getElementById("del").innerHTML = `${eliminado} Eliminado`
        }
    }
    document.getElementById("resultado5").innerHTML = `${historial.join(" Enviado<br>")} Enviado<br>`
    
}
/* ejer 8 ------------------------------------------------------------------------------------------------ */
let cola = ["Cliente1", "Cliente2", "Cliente3"]

document.getElementById("resultado6").innerHTML = `${cola.join(" - ")}`
let numero_lista = 4
function atender() {
    cola.shift()
    let li = `cliente${numero_lista}`
    cola.push(li)
    document.getElementById("resultado6").innerHTML = `${cola.join(" - ")}`
    numero_lista++
}
/* ejer 9 ------------------------------------------------------------------------------------------------ */
let nombres = ["Pedro", "Juan", "Luis"]

document.getElementById("resultado7").innerHTML = `${nombres.join(" - ")}`
function nombre() {
    nombres.pop()
    nombres.unshift("Mateo")
    nombres.push("Ana")
    document.getElementById("resultado7").innerHTML = `${nombres.join(" - ")}`
}
/* ejer 10 ------------------------------------------------------------------------------------------------ */

let pilaf = ["Manzana", "Pera", "Uvas verdes"]
let colaf = ["Manzana", "Pera", "Uvas verdes"]

const li1 = document.getElementById("resultado8")
const li2 = document.getElementById("resultado9")

for(let cont = 0; cont <= pilaf; cont++){
    const li = document.createElement(li)
    li.innerText = 
}




