const tColores = {
    ROJO: 0,
    AZUL: 1,
    VERDE: 2,
    DORADO: 3,
};

const MAX_COLORES_SEQ = 12;

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

function mostrarSecuencia ( secuenciaColores , numero ) {
    process.stdout.write("Secuencia numero " + numero + ": ")
    for (let i = 0; i < numero; i++) {
        process.stdout.write(secuenciaColores[i] + " - " + secuenciaColores[i]+ " - " + secuenciaColores[i])
    }
}

mostrarSecuencia(generarSecuencia(4), 4)