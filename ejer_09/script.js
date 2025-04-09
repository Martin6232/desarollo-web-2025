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
    let limit = 5
    let inicial = 1
    let sum = 0
    for(let num= parseInt(prompt("Ingresa un numero: ")); inicial <= limit; inicial++){
        sum += num
    }
    alert(`La suma de todos los numeros es: ${sum}`)
}