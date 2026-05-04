const tColores = {
    ROJO: 0,
    AZUL: 1,
    VERDE: 2,
    DORADO: 3,
    BLANCO: 4,
    MARRON: 5,
    NARANJA: 6
};

const tModo = {
    FACIL: 1,
    DIFICIL: 2,
}

const readline = require("readline");
const MAX_COLORES_SEQ = 15;
const NUM_AYUDAS = 3;
const MAX_COLORES_FACIL = 4;
const MAX_COLORES_DIFICIL = 7;

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
    console.log(`Hola ${nombre}! \n\nElije una opción para continuar:\n0: Salir \n1: Jugar en modo sencillo. \n2: Jugar en modo dificil.`);

    let continuar = true
    while(continuar) {
        let nivelDificultad = await pregunta(rl, "Opcion: ")
        switch(parseInt(nivelDificultad)) {
            case tModo.FACIL:
                var numColores = MAX_COLORES_FACIL
                continuar = false;
                break
            case tModo.DIFICIL:
                numColores = MAX_COLORES_DIFICIL
                continuar = false;
                break
            default:
                console.log("Nivel de difucultad no valido, intentelo de nuevo")
        }
    }

    console.log(`Pulsa una tecla para empezar a jugar.`);

    await pregunta(rl, "");
    await comenzarJuego(nombre, rl, numColores, NUM_AYUDAS);

    rl.close();
}

function charToColor(color) {
    switch (color.toLowerCase()) {
        case "r":
            return tColores.ROJO;
        case "a":
            return tColores.AZUL;
        case "v":
            return tColores.VERDE;
        case "d":
            return tColores.DORADO;
        case "b":
            return tColores.BLANCO
        case "m":
            return tColores.MARRON
        case "n":
            return tColores.NARANJA
        default:
            return null;
    }
}

function intToColor(numero) {
    switch (numero) {
        case 0:
            return tColores.ROJO;
        case 1:
            return tColores.AZUL;
        case 2:
            return tColores.VERDE;
        case 3:
            return tColores.DORADO;
        case 4:
            return tColores.BLANCO
        case 5:
            return tColores.MARRON
        case 6:
            return tColores.NARANJA
        default:
            return null
    }
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
        case tColores.BLANCO:
            return "Blanco"
        case tColores.MARRON:
            return "Marron"
        case tColores.NARANJA:
            return "Naranja"
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

function utilizarAyuda(secuenciaColores, indice, numAyudas) {
    if (numAyudas > 0) {
        console.log("El siguiente color es el " + secuenciaColores[indice] + ". Te quedan " + (numAyudas - 1) + " ayudas!")
        return true;
    } else {
        console.log("No dispones de más ayudas.")
        return false;
    }
}

async function comenzarJuego(nombre, rl, numColores, numAyudas) {
    let secuenciaCompleta = generarSecuencia(numColores);
    
    let i = 0;
    let continuar = true;

    let rondasGanadas = 0
    let numColoresMostrar = 3;

    while (continuar && i < (MAX_COLORES_SEQ - 2)) {
        mostrarSecuencia(secuenciaCompleta, numColoresMostrar);

        console.log("Memoriza la secuencia y pulsa Enter para continuar ...");
        await pregunta(rl, "");
        console.clear();

        if(numColores == 4) {
            console.log(nombre + ", introduce la secuencia de " + numColoresMostrar + " colores : \n(R = Rojo, V = Verde, A = Azul, D = Dorado, x = Ayuda)");
        } else {
            console.log(nombre + ", introduce la secuencia de " + numColoresMostrar + " colores : \n(R = Rojo, V = Verde, A = Azul, D = Dorado, B = Blanco, M = Marron, N = Naranaja, x = Ayuda)");
        }

        let j = 0
        while (continuar && j < numColoresMostrar) {
            let colorUserSinProcesar = await pregunta(rl, "Color " + (j + 1) + ": ")

            if(colorUserSinProcesar.toLocaleLowerCase() === "x" && utilizarAyuda(secuenciaCompleta, j, numAyudas)) {
                numAyudas--
                j--
            } else if (!(colorUserSinProcesar.toLocaleLowerCase() === "x")){
                let colorUserProcesado = tColorToString(intToColor(charToColor(colorUserSinProcesar)))
                if (!(comprobarColor(secuenciaCompleta, j, colorUserProcesado))) {
                    j = 0
                    continuar = false
                    console.log("Has perdido...")
                }
            } else {
                j--
            }

            j++
        }
        
        if (j >= numColoresMostrar) {
            console.log("Enhorabuena , has acertado la secuencia numero " + (numColoresMostrar - 2) + "\n");
            rondasGanadas++
        }

        numColoresMostrar++;
        i++;
    }

    if (rondasGanadas >= (MAX_COLORES_SEQ - 2)) {
        console.log("Has ganado!!!")
    }
}

main().catch(console.error)