# Bowling Kata

Este proyecto simula un juego de boliche (bowling) en la terminal usando **Node.js**.  
Genera tiros aleatorios válidos (incluyendo el décimo frame con sus reglas especiales) y proyecta el scoreboard en formato tabla usando la librería `cli-table3`.  
También incluye la lógica de cálculo de puntaje según las reglas reales de bowling (strikes, spares y el manejo correcto del último frame).

---

## Tecnologías

- Node.js
- JavaScript (ESModules)
- [cli-table3](https://www.npmjs.com/package/cli-table3) (para visualizar el scoreboard)
- Mocha y Chai para pruebas
  
---

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/bowling-kata.git
cd bowling-kata
```

2. Instala las dependencias:
```bash
npm install
```

---

## Uso

- Para generar un juego aleatorio y mostrarlo en la terminal:
```bash
node bowling.js
```
Esto mostrará el scoreboard del juego con sus tiros y puntaje acumulado.

- Para correr las pruebas (si tienes Mocha configurado):
```bash
npm test
```

---

## Ejemplo visual
```text
┌────────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ Frame  │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │ 7  │ 8  │ 9  │ 10 │
├────────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
│ Rolls  │ X  │ 7 /│ 9 -│ X  │ - 8│ 8 /│ - 6│ X  │ X  │ X 8 1 │
├────────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
│ Score  │ 20 │ 39 │ 48 │ 66 │ 74 │ 84 │ 90 │ 120│ 148│ 167 │
└────────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘
```
> **Nota:** Los valores son generados aleatoriamente en cada ejecución.

---

## Flujo
1. Se generan tiros válidos (generateRandomGame)
2. Se calcula puntaje acumulado (calcScore y calcFrameScores)
3. Se muestra el scoreboard (cli-table3)

---

## Valor agregado
- Código probado con Mocha y Chai
- Visualización clara y profesional en terminal
- Documentación y ejemplos incluidos

---

## Autor

Ulises Moreno
