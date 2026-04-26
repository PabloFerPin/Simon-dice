const tColores = {
    ROJO: 0,
    AZUL: 1,
    VERDE: 2,
    DORADO: 3,
    AMARILLO: 4,
};

const readline = require("readline");
const MAX_COLORES_SEQ = 5;

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

    let continuar = true;
    let nivelDificultad;
    while (continuar) {
        nivelDificultad = await pregunta(rl, "Hola " + nombre + ", con que nivel de dificultad deseas jugar? (Facil = F, Normal = N, Dificil = D) ");

        if (nivelDificultad == "F" || nivelDificultad == "N" || nivelDificultad == "D") {
            continuar = false;
        } else {
            console.log("Opcion no valida, intentelo de nuevo")
        }
    }
    console.log(`Perfecto, pulsa una tecla para empezar a jugar.`);

    await pregunta(rl, "");
    await comenzarJuego(nombre, rl, nivelDificultad);

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
        case "y":
            numADevolver = tColores.AMARILLO;
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
            colorADevolver = tColores.ROJO;
            break;
        case 1:
            colorADevolver = tColores.AZUL;
            break;
        case 2:
            colorADevolver = tColores.VERDE;
            break;
        case 3:
            colorADevolver = tColores.DORADO;
            break;
        case 4:
            colorADevolver = tColores.AMARILLO;
            break;
        default:
            break;
    }

    return colorADevolver;
}

function tColorToString(color) {
    switch (color) {
        case tColores.ROJO:
            return "Rojo";
        case tColores.AZUL:
            return "Azul";
        case tColores.VERDE:
            return "Verde";
        case tColores.DORADO:
            return "Dorado";
        case tColores.AMARILLO:
            return "Amarillo"
        default:
            return null;
    }
}

function generarSecuencia(numColores) {
    let arrayRandom = [];

    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        let random = parseInt(Math.random() * numColores);
        arrayRandom.push(tColorToString(intToColor(random)));
    }

    return arrayRandom;
}

function comprobarColor(secuenciaColores, indice, color) {
    if (color == secuenciaColores[indice]) {
        return true;
    } else {
        return false;
    }
}

function mostrarSecuencia(secuenciaColores, numero) {
    console.log("Secuencia numero " + (numero - 2) + ":");
    for (let i = 0; i < numero; i++) {
        console.log(secuenciaColores[i]);
    }
}

async function comenzarJuego(nombre, rl, nivelDificultad) {
    let secuenciaCompleta = generarSecuencia(5);

    let i = 0;
    let j = 0
    let continuar = true;

    let rondasGanadas = 0
    let puntuacionTotal = 0;
    let numColoresMostrar;
    if (nivelDificultad == "F") {
        numColoresMostrar = 2;
    } else if (nivelDificultad == "N") {
        numColoresMostrar = 3;
    } else if (nivelDificultad == "D") {
        numColoresMostrar = 4;
    } else {
        numColoresMostrar = 2;
    }

    while (continuar && i < (MAX_COLORES_SEQ - 2)) {
        mostrarSecuencia(secuenciaCompleta, numColoresMostrar);

        console.log("Memoriza la secuencia y pulsa Enter para continuar ...");
        await pregunta(rl, "");
        console.clear();

        console.log(nombre + ", introduce la secuencia de " + numColoresMostrar + " colores :");
        console.log("(R = Rojo, V = Verde, A = Azul, D = Dorado, Y = Amarillo)");

        j = 0
        while (continuar && j < numColoresMostrar) {
            let colorUser = tColorToString(intToColor(charToColor(await pregunta(rl, "Color " + (j + 1) + ": "))))

            if (!(comprobarColor(secuenciaCompleta, j, colorUser))) {
                j = 0
                continuar = false
                console.log("Has perdido...")
            } else {
                puntuacionTotal += 5;
            }

            j++
        }
        
        if (j >= numColoresMostrar) {
            console.log("Enhorabuena , has acertado la secuencia numero " + (numColoresMostrar - 2) + "\n");
            rondasGanadas++
            puntuacionTotal += 10
        }

        numColoresMostrar++;
        i++;
    }

    if (rondasGanadas >= (MAX_COLORES_SEQ - 2)) {
        console.log("Has ganado!!!")
    }

    console.log("Puntucion total obtenida durante el juego: " + puntuacionTotal);
}

main().catch(console.error)