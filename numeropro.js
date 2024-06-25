// Función para iniciar el juego
function iniciarJuego() {
    let puntaje = 0;

    // Problema 1
    let respuesta1 = parseInt(prompt("¿Cuánto es 2 + 2?"));
    if (respuesta1 === 4) {
        puntaje += 50;
        alert("¡Correcto! Has ganado 50 puntos.");
    } else {
        alert("Incorrecto. La respuesta correcta es 4.");
    }

    // Problema 2
    let respuesta2 = parseInt(prompt("¿Cuánto es 5 x 3?"));
    if (respuesta2 === 15) {
        puntaje += 50;
        alert("¡Correcto! Has ganado 50 puntos.");
    } else {
        alert("Incorrecto. La respuesta correcta es 15.");
    }

    // Mostrar puntaje final
    alert("Tu puntaje final es: " + puntaje + " puntos.");
}
