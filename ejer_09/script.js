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
    if(operacion === "+") {
        resultado = num + num2
        alert(`El Resultado de la operacion es:  ${resultado}`)
    } else if(operacion === "-"){
        resultado = num - num2
        alert(`El Resultado de la operacion es:  ${resultado}`)
    } else if(operacion === "*") {
        resultado = num * num2
        alert(`El Resultado de la operacion es:  ${resultado}`)
    } else if(operacion === "/") {
        resultado = num / num2
        alert(`El Resultado de la operacion es:  ${resultado}`)
    } else {
        alert("La operatoria no es valida")
    }
}

function npares() {
    let n = 0
    for(let limit = 1; limit <= 10; limit++){
        let num = parseInt(prompt("ingrese su numero par:"))
        if(num % 2 == 0){
            n +=num
            alert(`suma de los numeros:  ${n}`)
        } else {
            alert("Solo puedes poner numeros pares")
            return
        }
    }
}

function suma_n_pares() {
    let limit = parseInt(prompt("Ingrese hasta que numero quiere llegar: "))
    let sum = 0
    let array = []
    for(let cont = 1; cont <= limit; cont++){
        if(cont % 2 == 0){
            sum += cont
            array.push(cont)
        }
    }
    alert(`${array.join(" + ")} = ${sum}`)
}

function nimpares() {
    let n = 0
    for(let limit = 1; limit <= 10; limit++){
        let num = parseInt(prompt("Ingrese su numero impar:"))
        if(num % 2 == 1){
            n +=num
            alert(`suma de los numeros:  ${n}`)
        } else {
            alert("Solo puedes poner numeros impares")
            return
        }
    }
}

function suma_n_impares() {
    let limit = parseInt(prompt("Ingrese hasta que numero quiere llegar: "))
    let sum = 0
    let array = []
    for(let cont = 1; cont <= limit; cont++){
        if(cont % 2 == 1){
            sum += cont
            array.push(cont)
        }
    }
    alert(`${array.join(" + ")} = ${sum}`)
}

function suma_n_mult() {
    let limit = parseInt(prompt("Ingrese hasta que numero quiere llegar: "))
    let sum = 0
    let array = []
    for(let cont = 1; cont <= limit; cont++){
        if(cont % 3 == 0){
            sum += cont
            array.push(cont)
        }
    }
    alert(`${array.join(" + ")} = ${sum}`)
}

function nfactorial() {
    let n = parseInt(prompt("Ingresa tu numero:"))
    let fact = 1
    let mult = []
    for(let num = 1; num <= n; num++) {
        mult.push(num)
        fact *= num
    }
    alert(`El resultado de ${n}! es:\n${mult.join(" * ")} = ${fact}`)
}

function celcius() {
    let c = parseInt(prompt("Ingresa la temperatura de hoy: "))
    let f = (c * 9/5) + 32 //Este es la operacion para calcular los grados F
    alert(`${c}°C = ${f}°F`)
}

function palabra_larga() {
    let palabra = prompt("Ponga cualquier frase:")

}

function primos() {
    let n = parseInt(prompt("Ingresa tu numero:"))
    let primos = []
    for(let num = 2; num <= n; num++){
        if(num %  == 0) {
            
        }
    }
    alert(`Estos son todos los numeros primos de ${n}:\n${primos.join(" - ")}`)
}

