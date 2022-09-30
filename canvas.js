function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchura*i), 640);
        tablero.lineTo(550 + (anchura*i), 640);
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710, 40);
}

function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505+(anchura*index), 620);
    tablero.stroke();
}

function dibujarHorca(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
        
    //palo vertical
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(730,500);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(730,200);
        
    //palo superior horizontal
    tablero.moveTo(730,200);
    tablero.lineTo(870,200);
        
    tablero.stroke();
    tablero.closePath();
}

function cabeza(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    
    //cabeza
    tablero.beginPath();
    tablero.arc(870,260, 30, 0, 2 * Math.PI); // Círculo externo

    //cuerda
    tablero.moveTo(870,200);
    tablero.lineTo(870,230);

    tablero.stroke();
    tablero.closePath();
}

function tronco(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //tronco
    tablero.beginPath();

    tablero.moveTo(870,400);
    tablero.lineTo(870,290);
    
    tablero.stroke();
    tablero.closePath();
}

function brazoDerecho(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //brazo derecho
    tablero.beginPath();

    tablero.moveTo(870,290);
    tablero.lineTo(910,350);
    
    tablero.stroke();
    tablero.closePath();
}

function brazoIzquierdo(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //brazo izquierdo
    tablero.beginPath();

    tablero.moveTo(870,290);
    tablero.lineTo(830,350);
    
    tablero.stroke();
    tablero.closePath();
}

function piernaDerecha(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //pierna derecha
    tablero.beginPath();
    
    tablero.moveTo(870,400);
    tablero.lineTo(910,450);
    
    tablero.stroke();
    tablero.closePath();
}

function piernaIzquierda(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //pierna izquierda
    tablero.beginPath();
    
    tablero.moveTo(870,400);
    tablero.lineTo(830,450);
    
    tablero.stroke();
    tablero.closePath();
}

function dibujarCuerpo(){
    switch (errores) {
        case 6:
            cabeza();
            break;
        case 5:
            tronco();
            break;
        case 4:
            brazoDerecho();
            break;
        case 3:
            brazoIzquierdo();
            break;
        case 2:
            piernaDerecha();
            break;
        case 1:
            piernaIzquierda();
            break;            
        case 0:
            dibujarAhorcado();
        default:
            break;
    }
}

function msjGanador() {
  
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText("¡Ganaste 🤓, Felicidades!", 100, 100);
}
  
function msjPerdedor() {
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText("Fin del juego. La palabra era " + palabraSecreta, 100, 100);
}

function dibujarAhorcado() {
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.beginPath();
    tablero.moveTo(880, 250);
    tablero.lineTo(887, 257);
    tablero.moveTo(858, 250);
    tablero.lineTo(865, 257);
    tablero.moveTo(865, 250);
    tablero.lineTo(858, 257);
    tablero.moveTo(887, 250);
    tablero.lineTo(880, 257);
    tablero.moveTo(867, 270);
    tablero.lineTo(883, 270);
    tablero.stroke();
    
    tablero.arc(880, 270, 5.5, 0, Math.PI, false);
    tablero.fill();
    
    tablero.stroke();
    tablero.closePath();
  }