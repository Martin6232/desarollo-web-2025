function suman() {
    let n = parseInt(prompt("Ingrese un numero: "))
    let varn = 0
    for(let num = 1; num <= n; num++){
        varn += num
    }
    alert(`El resultado es: ${varn}`)
}

function pares() {
    let muestra = []
    for(let n = 1; n <= 200; n++){
        if(n % 2 == 0){
            muestra.push(n)
        }
    }
    alert(`Los primeros 100 numeros pares son:\n${muestra.join(" - ")}`)
}

function impares() {
    let muestra = []
    for(let n = 1; n <= 200; n++){
        if(n % 2 == 1){
            muestra.push(n)
        }
    }
    alert(`Los primeros 100 numeros impares son:\n${muestra.join(" - ")}`)
}

function teclado() {
    let n = 0
    for(let inicial = 1; inicial <= 5; inicial++){
        let num = parseInt(prompt("Ingresa un numero: "))
        n += num
    }
    alert(`La suma de todos los numeros es: ${n}`)
}

function teclado2() {
    let n = 0
    let veces = parseInt(prompt("Cuantas Veces quieres sumar: "))
    for(let inicial = 1; inicial <= veces; inicial++){
        let num = parseInt(prompt("Ingresa un numero: "))
        n += num
    }
    alert(`La suma de todos los numeros es: ${n}`)
}

function calculadora() {
    let num = parseInt(prompt("Ingresa tu primer numero: "))
    let operacion = prompt("Ingresa tu operatoria: ")
    let num2 = parseInt(prompt("Ingresa tu segundo numero: "))
    let resultado = 0
    
}
