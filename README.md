# 🎮 Simon Dice v2

> Un juego de memoria clásico para la terminal, ahora con modo difícil y sistema de ayudas.

---

## ¿Qué es esto?

**Simon Dice** es la versión en consola del famoso juego de memoria. El juego te muestra una secuencia de colores que va creciendo cada ronda — tú tienes que memorizarla y reproducirla correctamente. Un fallo y se acabó.

La v2 añade un **modo difícil** con más colores, más rondas, y un **sistema de ayudas** para cuando la memoria falla.

---

## 🚀 Cómo ejecutarlo

**Requisitos:** Node.js instalado.

```bash
node simon_dice.js
```

No necesita ninguna dependencia externa. Solo Node.js y la terminal.

---

## 🕹️ Modos de juego

| Modo       | Colores disponibles | Rondas |
|------------|---------------------|--------|
| 🟢 Sencillo | 4                   | 4      |
| 🔴 Difícil  | 7                   | 4      |

Al iniciar, el juego te pedirá elegir:

```
0: Salir
1: Jugar en modo sencillo
2: Jugar en modo difícil
```

---

## 🎯 Cómo se juega

1. Introduce tu nombre al iniciar.
2. Elige el modo de juego.
3. El juego te muestra una secuencia de colores.
4. Memorízala y pulsa **Enter** para ocultarla.
5. Introduce los colores en orden usando las teclas:

### Modo sencillo

| Tecla | Color    |
|-------|----------|
| `R`   | 🔴 Rojo   |
| `A`   | 🔵 Azul   |
| `V`   | 🟢 Verde  |
| `D`   | 🟡 Dorado |
| `X`   | 💡 Ayuda  |

### Modo difícil

| Tecla | Color     |
|-------|-----------|
| `R`   | 🔴 Rojo    |
| `A`   | 🔵 Azul    |
| `V`   | 🟢 Verde   |
| `D`   | 🟡 Dorado  |
| `B`   | ⚪ Blanco  |
| `M`   | 🟤 Marrón  |
| `N`   | 🟠 Naranja |
| `X`   | 💡 Ayuda   |

---

## 💡 Sistema de ayudas

Cada partida dispone de **3 ayudas**. Para usarla, introduce `X` cuando te toque un color — la máquina te revelará cuál es el siguiente.

```
Color 3: x
El siguiente color es el Verde. Te quedan 2 ayudas!
Color 3: v
```

Si ya no tienes ayudas disponibles:

```
Color 3: x
No dispones de más ayudas.
Color 3:
```

Las ayudas están disponibles en ambos modos de juego.

---

## 📐 Estructura del proyecto

```
simon_dice.js
│
├── main()                → Punto de entrada, menú y selección de modo
├── comenzarJuego()       → Lógica principal del juego
├── generarSecuencia()    → Genera la secuencia aleatoria según el modo
├── mostrarSecuencia()    → Muestra la secuencia por consola
├── comprobarColor()      → Valida cada color introducido
├── utilizarAyuda()       → Gestiona el sistema de ayudas
├── charToColor()         → Convierte tecla → valor del enum
├── intToColor()          → Convierte número → valor del enum
└── tColorToString()      → Convierte valor del enum → string
```

---

## ⚙️ Configuración

```js
const MAX_COLORES_SEQ = 6;    // Longitud máxima de la secuencia
const NUM_AYUDAS = 3;         // Ayudas disponibles por partida
const MAX_COLORES_FACIL = 4;  // Colores en modo sencillo
const MAX_COLORES_DIFICIL = 7;// Colores en modo difícil
```

---

## 🛠️ Tecnologías

- **Node.js** — entorno de ejecución
- **readline** — módulo nativo para entrada por consola
- **async/await** — para gestión de input asíncrono

---

## 👤 Autor

Hecho por **Pablo** como práctica de programación.

---

*Simon Dice v2 — ahora con más colores y menos excusas.*
