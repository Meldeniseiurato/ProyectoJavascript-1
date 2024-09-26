// Declaración de constantes y variables
const MAX_INTENTOS = 5;
let numeroSecreto;
let intentos = 0;
let adivinanzas = [];

// Inicializa el juego
document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();
    document.getElementById("guessButton").addEventListener("click", realizarAdivinanza);
    document.getElementById("restartButton").addEventListener("click", reiniciarJuego);
});

// Función para iniciar el juego
function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    adivinanzas = [];
    document.getElementById("message").textContent = "¡Bienvenido al juego de adivinanza de números!";
    document.getElementById("guessInput").value = '';
    document.getElementById("attempts").textContent = '';
    document.getElementById("restartButton").style.display = "none";
}

// Función para realizar la adivinanza
function realizarAdivinanza() {
    const adivinanza = parseInt(document.getElementById("guessInput").value);
    
    // Validación de la entrada
    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
        mostrarMensaje("Por favor, ingresa un número válido entre 1 y 100.");
        return;
    }

    intentos++;
    adivinanzas.push(adivinanza);
    guardarDatos();

    if (adivinanza === numeroSecreto) {
        mostrarMensaje(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intento(s).`);
        document.getElementById("restartButton").style.display = "inline";
    } else if (adivinanza < numeroSecreto) {
        mostrarMensaje("El número secreto es mayor. Intenta de nuevo.");
    } else {
        mostrarMensaje("El número secreto es menor. Intenta de nuevo.");
    }

    if (intentos >= MAX_INTENTOS) {
        mostrarMensaje(`Lo siento, has agotado todos tus intentos. El número secreto era ${numeroSecreto}.`);
        document.getElementById("restartButton").style.display = "inline";
    }

    mostrarIntentos();
}

// Función para mostrar mensajes al usuario
function mostrarMensaje(mensaje) {
    document.getElementById("message").textContent = mensaje;
}

// Función para mostrar intentos
function mostrarIntentos() {
    document.getElementById("attempts").textContent = `Tus adivinanzas: ${adivinanzas.join(", ")}`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    iniciarJuego();
}

// Función para guardar datos en Local Storage
function guardarDatos() {
    localStorage.setItem("adivinanzas", JSON.stringify(adivinanzas));
    localStorage.setItem("intentos", intentos);
}

// Función para cargar datos desde Local Storage
function cargarDatos() {
    const storedAdivinanzas = localStorage.getItem("adivinanzas");
    const storedIntentos = localStorage.getItem("intentos");
    
    if (storedAdivinanzas) {
        adivinanzas = JSON.parse(storedAdivinanzas);
    }
    if (storedIntentos) {
        intentos = parseInt(storedIntentos);
    }

    iniciarJuego();
}
