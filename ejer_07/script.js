function incremento() {
    let contador = 1;
    while (contador <= 5) {
        console.log(contador);
        alert(contador);
        contador++;
    }
}

function regresiva() {
    let contador = 10;
    while (contador >= 1) {
        console.log(contador);
        alert(contador);
        contador--;
    }
}

function forsuma() {
    for (let cont = 1; cont <= 5; cont++) {
        console.log(cont);
        alert(cont);
    }
}

function multiplos() {
    for (let cont = 1; cont <= 10; cont++) {
        if(cont % 2 == 0) {
            alert(cont);
        }
    }
}