/* 1 y 2 */
function compras() {
    let carrito = []
    let quitar
    cont = 0
    while(cont = 1){
        let producto = prompt(`Quiere agregar un producto al carrito:`)
        if (producto != "salir") {
            carrito.push(producto)
        } else {
            cont++
            break
        }
    }
    alert(`¡Compra exitosa!\nUsted lleva: ${carrito.join(" - ")}`)
}