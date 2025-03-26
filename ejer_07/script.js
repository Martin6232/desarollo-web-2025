function incremento() {
    let contador = 1;
    let array = [];
    while (contador <= 5) {
        array.push(contador)
        alert(array.join( - ));
        contador++;
    }
}

function regresiva() {
    let contador = 10;
    let array = [];
    while (contador >= 1) {
        array.push(contador)
        alert(array.join( - ));
        contador--;
    }
}

function forsuma() {
    let suma = 0;
    for (let cont = 1; cont <= 5; cont++) {
        suma += cont;
        if(cont == 5) {
            alert(suma)
        }
    }
    
}

function multiplos() {
    let array = [];
    for (let cont = 1; cont <= 10; cont++) {
        if(cont % 2 == 0) {
            array.push(cont)
            alert(array.join( - ));
        }
    }
}