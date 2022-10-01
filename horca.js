// Selectores
let palabras = ["MANZANA", "CHOCOLATE", "COMADREJA", "PARALELO", "MOSTAZA", "SIRENA", "GLORIA", "PROBLEMA", "AVENTURA", "ANTIGUO", "MADRIGUERA", "GRIEGO", "EMPANADA", "SONRISA", "SORPRESA", "MUSICAL", "GIGANTE", "VENTILADOR", "CORREDIZO", "SERIO", "LONDRES", "VEJEZ", "CONQUISTA", "GUERRA", "HOTEL", "MUNDIAL", "BOSTEZO", "BERENJENA", "CABILDO", "EFICAZ"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 7;
let aciertos = 0;
let letrasIncorrectas = [];
let letrasCorrectas = [];
const jsConfetti = new JSConfetti();

// Palabra Secreta
function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    // console.log(palabraSecreta);
}

function comprobarLetra(keyCode){
    // el rango comprendido entre 65 y 90 corresponde a la ubicación de las letras mayúsculas en el código ASCII
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) { 
    //envía la letra de la tecla presionada a la lista de letras
    letras.push(keyCode);    
    //   console.log(keyCode);
    //   console.log(letras);
      return true;
    } else {
    //   console.log("false");
      return false;
    }
}

//disminuye el contador de errores solo si se presiona una letra y agrega la letra incorrecta a la lista
function agregarLetraIncorrecta(letraInc){
        if (!letrasIncorrectas.includes(letraInc)){
            letrasIncorrectas.push(letraInc);
            // console.log(letrasIncorrectas);
            // console.log(letrasIncorrectas);
        }
}

//incrementa el contador de aciertos y agrega la letra correcta a la lista
function listaLetrasCorrectas(letra){
    aciertos += 1;
    if (!letrasCorrectas.includes(letra)){
        letrasCorrectas.push(letra);
        // console.log(letrasCorrectas);
        // console.log(aciertos);
    }
}

function compruebaSiPerdio(){
    if(errores === 0){
        msjPerdedor();
    }
}

function compruebaSiGano(){
    if(aciertos === palabraSecreta.length) {
        msjGanador();
        jsConfetti.addConfetti(); 
    }
}

// Iniciar juego
function iniciarJuego(){
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("reinicia").style.display = "";
    elegirPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    dibujarHorca();

    document.onkeydown = (e) => {
    if(errores > 0 && aciertos < palabraSecreta.length){
        let letra = e.key.toUpperCase();
           
    if(!letrasCorrectas.includes(letra)){
        const validoLetra = new RegExp('^[A-Z]$', 'i');
        if(comprobarLetra(e.keyCode) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if (palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                    listaLetrasCorrectas(letra);
                }
            }
        }else if (!letrasIncorrectas.includes(letra) && validoLetra.test(letra)){
            agregarLetraIncorrecta(letra);
            errores -= 1;
            escribirLetraIncorrecta(letra, errores);
            dibujarCuerpo();
        }
    }
    } 
        
    compruebaSiPerdio();
    compruebaSiGano();
    }
    
}

//El usuario puede agregar una palabra para jugar con ella.
function nuevaPalabra() {
    //capta los valores ingresados en el elemento referido con una clase (textarea del index class newWord).
    let nuevaPalabra = document.querySelector(".newWord").value;
    // Expresión regular, donde:
    // ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes.
    // [A-Z] indica que los caracteres admitidos son letras del alfabeto.
    // + indica que los caracteres dentro de los corchetes se pueden repetir.
    // $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
    // i indica que validaremos letras mayúsculas y minúsculas (case-insensitive).
    const pattern = new RegExp('^[A-Z]+$', 'i');
    //valida si el valor ingresado contiene los caracteres permitidos.
    if (pattern.test(nuevaPalabra)){
        //valida si la longitud de la palabra es mayor a cero y menor a 11 caracteres
        if(nuevaPalabra.length > 0 && nuevaPalabra.length < 11){  
            //convierte el valor en mayúsculas
            nuevaPalabra = nuevaPalabra.toUpperCase();
            //vacía la lista contenida en palabras para que sea el único valor posible de sortear y permita el juego con esa palabra
            palabras = [];
            //envía la palabra nueva a la lista
            palabras.push(nuevaPalabra);
            //función para iniciar el juego
            iniciarJuego();
        }   else {
            alert ("La palabra supera el límite.")
            //actualiza la página
            location. reload();
        }
    } else {
        alert ("Ingrese una palabra válida. Solo puede ingresar letras.")
        location. reload();
    }
}