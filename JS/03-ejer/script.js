let numero = 14;
let string = "holo";
let bool = true;
let multiple = [25, 34, 8, 3];
const datos = {
    especie: "gato",
    nombre: "morice"
};
let vacio = undefined;
let nulo = null;

let matriz = [[1, 2], [3, 4]];


function int() {
    alert(numero)
};

function text() {
    alert(string)
};

function pregunta() {
    alert("¿Las uvas verdes son más ricas? = " + bool)
};

function array() {
    alert(multiple)
};

function indef() {
    alert(vacio)
};

function matrix() {
    alert("matriz:\n" + matriz)
};

function nada() {
    alert(nulo)
};

function suma(A, B, C) {
    A = 20,
    B = 80,
    C = A + B,
    alert(A + " + " + B + " = " + C)
};