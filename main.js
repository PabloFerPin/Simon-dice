const tColores = {
    ROJO: 0,
    AZUL: 1,
    VERDE: 2,
    DORADO: 3,
};
const readline = require("readline");
const MAX_COLORES_SEQ = 12;

function pregunta(rl, texto) {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
}

async function main() {
    process.stdin.resume();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("¡Bienvenido a Simon dice!");
    const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
    console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);

    await pregunta(rl, "");
    await comenzarJuego(nombre, rl);

    rl.close();
}

function charToColor(color) {
    let colorAProbar = color.toLowerCase();
    let numADevolver;

    switch (colorAProbar) {
        case "r":
            numADevolver = tColores.ROJO;
            break;
        case "a":
            numADevolver = tColores.AZUL;
            break;
        case "v":
            numADevolver = tColores.VERDE;
            break;
        case "d":
            numADevolver = tColores.DORADO;
            break;
        default:
            numADevolver = null;
            break;
    }

    return numADevolver;
}

function intToColor(numero) {
    let colorADevolver;

    switch (numero) {
        case 0:
            colorADevolver = "Rojo";
            break;
        case 1:
            colorADevolver = "Azul";
            break;
        case 2:
            colorADevolver = "Verde";
            break;
        case 3:
            colorADevolver = "Dorado";
            break;
        default:
            break;
    }

    return colorADevolver;
}

function generarSecuencia(numColores) {
    let arrayRandom = [];

    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        let random = parseInt(Math.random() * numColores);
        arrayRandom.push(intToColor(random));
    }

    return arrayRandom;
}

function comprobarColor(secuenciaColores, indice, color) {
    if (secuenciaColores[indice] == color) {
        return true;
    } else {
        return false;
    }
}

function mostrarSecuencia(secuenciaColores, numero) {
    console.log("Secuencia numero " + numero + ": ")
    for (let i = 0; i < numero; i++) {
        console.log(secuenciaColores[i])
    }
}

async function comenzarJuego ( nombre , rl ) {
    generarSecuencia(4);
}