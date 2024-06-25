let puntaje = 0;
let respuesta1 = prompt("Cuando es 2+2:");
if(respuesta1 === 4){
    puntaje+=50;
    alert("Correcto! Has ganado 50 puntos.");
}else{
    alert("Incorrecto! La respuesta correcta es 4.");
}
let respuesta2 = prompt("Cuanto es 3x5:");
if(respuesta2 === 15){
    puntaje+=50;
    alert("Correcto! Has ganado 50 puntos.");
}else{
    alert("Incorrecto! La respuesta correcta es 15.");
}
alert("Tu puntaje final es:" + puntaje + " Puntos.");
