console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí
    let ahora = parseInt(prompt("Ingresa el año actual: "));
    let fecha_nac = parseInt(prompt("Ingrese el año de nacimiento: "));
    let edad = ahora - fecha_nac;
    alert ("tienes " + edad + " años.");
    }
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
        let var1 = prompt("Ingrese la valor: ");
        let var2 = var1;
        alert (var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
        num1 = parseInt(prompt("ingresa el primer numero:"));
        num2 = parseInt(prompt("ingresa el segundo numero:"));
        num3 = parseInt(prompt("ingresa el tercer numero:"));
        suma = num1 + num2 + num3;
        resta = num1 - num3;
        multiplicacion = num2 * num3;
        divicion = num1 / 120;
        alert ("Resultados: \n Suma: " + suma + "\n Resta: " + resta + "\n Multiplicación: " + multiplicacion + "\n Divicion: " + divicion);
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
        let direccion = prompt("Ingrese dirrecion: ");
        let nCasa = prompt("Ingrese numero de casa: ");
        let mensaje = direccion + " " + nCasa;
        alert ("La dirrecion es:" + mensaje + "\nCantidad de caracteres: " + mensaje.length + "\ncaracter antepenultimo: " + mensaje[mensaje.length-3]);
    }