function registro() {
    let cant = 0
    let nombres = []
    for(let stop = 40; cant <= stop; cant++){
        let ingresar = prompt("Ingresa un nombre: ")
        if(ingresar == "salir") {
            if(cant >= 5) {
                alert("¡Felicitaciones se an registrado la cantidad minima de personas!")
            }
            alert(`Total de ingresados: ${cant}\nNombres: ${nombres.join(", ")}`)
            return
        } else {
            nombres.push(ingresar)
        }
    }
}

function simular() {
    let productos = ["Manzana", "Leche", "Huevos", "Queso", "Uvas"]
    for(let stop = 0; stop <= 6; stop++) {
        alert(`${productos.join(", ")}\nComprar producto`)
        let venta = productos[productos.length -1]
        if(productos.length === 0){
            alert("Sin stock se a vendido todo.")
            return
        } else {
            alert(`Se vendio: ${venta}`)
            productos.pop()
        }
    }
    
}

function calcular() {
    let notas = []
    let promedio = null
    for(let cont = 1; cont <= 5; cont++){
        let ingresado = parseFloat(prompt(`${cont}-Ingrese su nota:`))
        promedio += ingresado
        notas.push(ingresado) 
    }
    promedio = promedio / 5
    if(promedio >= 4.0){
        alert(`Tus notas son: ${notas.join("\n")}\nTu promedio es: ${promedio}\n¡Estas aprobado!🎉🎉🎉`)
    } else {
        alert(`Tus notas son: ${notas.join("\n")}\nTu promedio es: ${promedio}\nEstas reprobado😢😢😢`)
    }
}

function separar() {
    let par = []
    let impar = []
    for(let cont = 1; cont <= 6; cont++) {
        let num = parseInt(prompt(`${cont}- Ingrese un numero`))
        if(num % 2 == 0) {
            par.push(num)
        } else {
            impar.push(num)
        }
    }
    alert(`Par: ${par.join(" - ")}\nImpar: ${impar.join(" - ")}`)
}