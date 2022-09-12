let palabras = ["MANZANA", "CHOCOLATE", "COMADREJA", "PARALELO", "MOSTAZA"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";

function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    elegirPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()
}