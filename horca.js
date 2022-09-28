// Selectores
let palabras = ["MANZANA", "CHOCOLATE", "COMADREJA", "PARALELO", "MOSTAZA"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letraAcertada=[''];
let letras = [];
let errores = 7;


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
        console.log(key);
        return estado;
    }else{
        estado = true;
        console.log(key);
        return estado;
    }
}

function agregarLetraIncorrecta(){
    errores -= 1;
    console.log(errores);
}



function muestraPalabraSecreta(){
    var palabra = document.getElementById('muestra-palabra-secreta');
    palabra.innerHTML= palabraSecreta;

}

function compruebaSiPerdio(){
    if(errores<=0){
        swal("Error!", "Numero de Intentos Maximo!", "warning");
        muestraPalabraSecreta();
    }
}

function compruebaSiGano(){
    //como la letraAcertada se va guardando por separado 
    // hay que unirla y compararla con la palabra secreta
    if(palabraSecreta===letraAcertada.join('')){
        swal("Gano :D!", "Gano!", "success");
    }
    //console.log(letraAcertada.join(''));
    //console.log(palabraSecreta);
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
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if (palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            agregarLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
            dibujarCuerpo();
        }
    }
}
