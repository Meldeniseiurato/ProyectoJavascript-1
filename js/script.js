// Declaración de constantes y variables
const MAX_INTENTOS = 5;  // Número máximo de intentos permitidos
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1; // Número secreto entre 1 y 100
let intentos = 0; // Contador de intentos
let adivinanzas = []; // Array para almacenar las adivinanzas del usuario

// Función principal del juego
function jugar() {
    alert("¡Bienvenido al juego de adivinanza de números!");
    
    while (intentos < MAX_INTENTOS) {
        let adivinanza = parseInt(prompt("Adivina un número entre 1 y 100:"));
        
        // Validación de la entrada del usuario
        if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            continue;
        }
        
        // Incremento del contador de intentos y almacenamiento de la adivinanza
        intentos++;
        adivinanzas.push(adivinanza);
        
        // Comprobación de la adivinanza
        if (adivinanza === NUMERO_SECRETO) {
            alert(`¡Felicidades! Adivinaste el número secreto ${NUMERO_SECRETO} en ${intentos} intento(s).`);
            break;
        } else if (adivinanza < NUMERO_SECRETO) {
            alert("El número secreto es mayor. Intenta de nuevo.");
        } else {
            alert("El número secreto es menor. Intenta de nuevo.");
        }
        
        // Mostrar mensajes al usuario dependiendo de los intentos restantes
        if (intentos === MAX_INTENTOS) {
            alert(`Lo siento, has agotado todos tus intentos. El número secreto era ${NUMERO_SECRETO}.`);
        } else {
            console.log(`Intento ${intentos} de ${MAX_INTENTOS}: ${adivinanza}`);
            if (confirm("¿Quieres seguir jugando?")) {
                continue;
            } else {
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
