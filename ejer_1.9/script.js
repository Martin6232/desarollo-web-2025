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