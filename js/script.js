// Declaración de constantes y variables
const MAX_INTENTOS = 5;  // Número máximo de intentos permitidos
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1; // Número secreto entre 1 y 100
let intentos = 0; // Contador de intentos
let adivinanzas = []; // Array para almacenar las adivinanzas del usuario

// Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    alert("¡Bienvenido al juego de adivinanza de números!");
}

// Función para obtener y validar la adivinanza del usuario
function obtenerAdivinanza() {
    let adivinanza = parseInt(prompt("Adivina un número entre 1 y 100:"));
    
    // Validación de la entrada del usuario
    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
        return obtenerAdivinanza(); // Repetir la solicitud si la entrada es inválida
    }
    
    return adivinanza;
}

// Función para procesar la adivinanza y dar feedback
function procesarAdivinanza(adivinanza, numeroSecreto) {
    intentos++;
    adivinanzas.push(adivinanza);
    
    if (adivinanza === numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intento(s).`);
        return true; // El juego termina
    } else if (adivinanza < numeroSecreto) {
        alert("El número secreto es mayor. Intenta de nuevo.");
    } else {
        alert("El número secreto es menor. Intenta de nuevo.");
    }
    
    return false; // El juego continúa
}

// Función principal del juego
function jugar() {
    mostrarBienvenida();
    
    while (intentos < MAX_INTENTOS) {
        let adivinanza = obtenerAdivinanza();
        
        if (procesarAdivinanza(adivinanza, NUMERO_SECRETO)) {
            break; // Terminar el juego si se adivina el número
        }
        
        // Mostrar mensajes al usuario dependiendo de los intentos restantes
        if (intentos === MAX_INTENTOS) {
            alert(`Lo siento, has agotado todos tus intentos. El número secreto era ${NUMERO_SECRETO}.`);
        } else {
            console.log(`Intento ${intentos} de ${MAX_INTENTOS}: ${adivinanza}`);
            if (!confirm("¿Quieres seguir jugando?")) {
                alert("Gracias por jugar. ¡Hasta la próxima!");
                break;
            }
        }
    }
    
    // Mostrar todas las adivinanzas realizadas
    console.log("Tus adivinanzas fueron: ", adivinanzas);
}

// Llamada a la función principal para iniciar el juego
jugar();