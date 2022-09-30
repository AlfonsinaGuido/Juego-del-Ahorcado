function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1300,800);
    tablero.beginPath();
    tablero.moveTo(400, 450);
    tablero.lineTo(650, 450);
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
        tablero.moveTo(400 + (anchura*i), 540);
        tablero.lineTo(450 + (anchura*i), 540);
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
    tablero.fillText(letra, 380+(40*(10-errorsLeft)), 585, 40);
}

function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 410 +(anchura*index), 530);
    tablero.stroke();
}

function dibujarHorca(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
        
    //palo vertical
    //nos permite poner puntos en cordenadas (x,y)
    tablero.moveTo(500,450);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(500,150);
        
    //palo superior horizontal
    tablero.moveTo(500,150);
    tablero.lineTo(620,150);
        
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
    tablero.arc(620,210, 30, 0, 2 * Math.PI); // Círculo externo

    //cuerda
    tablero.moveTo(620,150);
    tablero.lineTo(620,180);

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

    tablero.moveTo(620,360);
    tablero.lineTo(620,240);
    
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

    tablero.moveTo(620,260);
    tablero.lineTo(660,320);
    
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

    tablero.moveTo(620,260);
    tablero.lineTo(580,320);
    
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
    
    tablero.moveTo(620,360);
    tablero.lineTo(660,420);
    
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
    
    tablero.moveTo(620,360);
    tablero.lineTo(580,420);
    
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
    tablero.moveTo(630, 200);
    tablero.lineTo(637, 207);
    tablero.moveTo(608, 200);
    tablero.lineTo(615, 207);
    tablero.moveTo(615, 200);
    tablero.lineTo(608, 207);
    tablero.moveTo(637, 200);
    tablero.lineTo(630, 207);
    tablero.moveTo(617, 220);
    tablero.lineTo(633, 220);
    tablero.stroke();
    
    tablero.arc(630, 220, 5.5, 0, Math.PI, false);
    tablero.fill();
    
    tablero.stroke();
    tablero.closePath();
  }