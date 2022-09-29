// Selectores
let palabras = ["MANZANA", "CHOCOLATE", "COMADREJA", "PARALELO", "MOSTAZA"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 7;
let aciertos = 0;
let letrasIncorrectas = [];
let letrasCorrectas = [];

// Palabra Secreta
function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetra(key){
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log("comprobación ok");
        console.log(key);
        return estado;
    }else{
        estado = true;
        console.log(key);
        return estado;
    }
}

function agregarLetraIncorrecta(letra){
    errores -= 1;
    if (!letrasIncorrectas.includes(letra)){
        letrasIncorrectas.push(letra);
        console.log(letrasIncorrectas);
        console.log(errores);
    }
}

function listaLetrasCorrectas(letra){
    aciertos += 1;
    if (!letrasCorrectas.includes(letra)){
        letrasCorrectas.push(letra);
        console.log(letrasCorrectas);
        console.log(aciertos);
    }
}

function compruebaSiPerdio(){
    if(errores === 0){
        alert("Alpiste, perdiste 🤨 La palabra era " + palabraSecreta);
        location.reload();
    }
}

function compruebaSiGano(){
    if(aciertos === palabraSecreta.length) {
        alert("Acertaste, ganaste 🤓");
        location.reload();
    }
}

// Iniciar juego
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    elegirPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    dibujarHorca();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
    if(!letrasCorrectas.includes(letra)){

        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if (palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                    listaLetrasCorrectas(letra);
                }
            }
        }else if (!letrasIncorrectas.includes(letra)){
            agregarLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
            dibujarCuerpo();
        }

    }
    compruebaSiPerdio();
    compruebaSiGano();
    }
}
