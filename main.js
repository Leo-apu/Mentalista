var numeroSecreto = Math.floor(Math.random() * 1000) + 1;
var intentos = 0;
var maxIntentos = 10;
var juegoTerminado = false;

document.getElementById("adivinarBtn").addEventListener("click", function() {
    if (!juegoTerminado) {
        var numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);
        intentos++;

        if (numeroIngresado === numeroSecreto) {
            document.getElementById("mensaje").textContent = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";
            juegoTerminado = true;
        } else if (numeroIngresado < numeroSecreto) {
            document.getElementById("mensaje").textContent = "El número ingresado es demasiado bajo. Intenta de nuevo.";
        } else {
            document.getElementById("mensaje").textContent = "El número ingresado es demasiado alto. Intenta de nuevo.";
        }

        document.getElementById("intentos").textContent = intentos;

        if (intentos >= maxIntentos) {
            juegoTerminado = true;
            document.getElementById("mensaje").textContent = "Agotaste tus 10 intentos. ¡El juego ha terminado! El numero Secreto es: "+ numeroSecreto;
        }
    }
});

document.getElementById("reiniciarBtn").addEventListener("click", function() {
    numeroSecreto = Math.floor(Math.random() * 1000) + 1;
    intentos = 0;
    juegoTerminado = false;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("intentos").textContent = intentos;
    document.getElementById("numeroIngresado").value = "";
});