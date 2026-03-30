# 🎮 Simon Dice v1

> Un juego de memoria clásico para la terminal, construido en Node.js.

---

## ¿Qué es esto?

**Simon Dice** es la versión en consola del famoso juego de memoria. El juego te muestra una secuencia de colores que va creciendo cada ronda — tú tienes que memorizarla y reproducirla correctamente. Un fallo y se acabó.

---

## 🚀 Cómo ejecutarlo

**Requisitos:** Node.js instalado.

```bash
node simon_dice.js
```

No necesita ninguna dependencia externa. Solo Node.js y la terminal.

---

## 🎯 Cómo se juega

1. Introduce tu nombre al iniciar.
2. El juego te muestra una secuencia de colores.
3. Memorízala, pulsa **Enter** para ocultarla.
4. Introduce los colores en orden usando las teclas:

| Tecla | Color  |
|-------|--------|
| `R`   | 🔴 Rojo   |
| `A`   | 🔵 Azul   |
| `V`   | 🟢 Verde  |
| `D`   | 🟡 Dorado |

5. Cada ronda la secuencia crece en un color.
6. Supera todas las rondas para ganar.

---

## 📐 Estructura del proyecto

```
simon_dice.js
│
├── main()                → Punto de entrada, gestión del readline
├── comenzarJuego()       → Lógica principal del juego
├── generarSecuencia()    → Genera la secuencia aleatoria de colores
├── mostrarSecuencia()    → Muestra la secuencia por consola
├── comprobarColor()      → Valida cada color introducido
├── charToColor()         → Convierte tecla → valor del enum
├── intToColor()          → Convierte número → valor del enum
└── tColorToString()      → Convierte valor del enum → string
```

---

## ⚙️ Configuración

En la parte superior del archivo puedes modificar:

```js
const MAX_COLORES_SEQ = 12; // Número máximo de colores en la secuencia
```

Aumenta este valor para una experiencia más difícil.

---

## 📋 Ejemplo de partida

```
¡Bienvenido a Simon Dice!
¿Cuál es tu nombre? Pablo

Hola Pablo, pulsa una tecla para empezar a jugar.

Secuencia numero 1:
Rojo
Azul
Verde

Memoriza la secuencia y pulsa Enter para continuar ...

Pablo, introduce la secuencia de 3 colores :
(R = Rojo, V = Verde, A = Azul, D = Dorado)
Color 1: r
Color 2: a
Color 3: v

Enhorabuena, has acertado la secuencia numero 1

...

¡Has ganado!!!
```

---

## 🛠️ Tecnologías

- **Node.js** — entorno de ejecución
- **readline** — módulo nativo para entrada por consola
- **async/await** — para gestión de input asíncrono

---

## 👤 Autor

Hecho por **Pablo** como práctica de lenguaje de marcas.

---

*Simon Dice v1 — porque la memoria también se entrena.*
