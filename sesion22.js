// Paso 1: Declaración de variables
let numero1;
let numero2;
let operacion;

// Paso 2: Función para realizar operaciones con validación
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: La división por 0 no está definida.";
        } else {
            return num1 / num2;
        }
    } else {
        return "Error: Operación no válida.";
    }
}

// Paso 3: Bucle para realizar múltiples operaciones
while (true) {
    // Solicitar operación
    operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:");

    if (operacion.toLowerCase() === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }

    // Solicitar números
    numero1 = parseFloat(prompt("Ingrese el primer número:"));
    numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verificar que los valores sean números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        continue;
    }

    // Realizar la operación y mostrar el resultado
    const resultado = realizarOperacion(numero1, numero2, operacion);
    alert("Resultado: " + resultado);
}