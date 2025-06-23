import { generateRandomGame, calcScore } from "./src/bowling.js";
import Table from "cli-table3";

const rolls = generateRandomGame();
displayScoreboard(rolls, calcScore);

function displayScoreboard(rolls, calcScore) {
  const table = new Table({
    head: ["Frame", ...Array.from({ length: 10 }, (_, i) => (i + 1).toString())],
    colAligns: ["center", ...Array(10).fill("center")]
  });

  let rollDisplay = [];
  let frameScores = [];
  let i = 0;

  for (let frame = 1; frame <= 10; frame++) {
    if (rolls[i] === 10) {
      // Strike
      if (frame < 10) {
        rollDisplay.push([" ", "X"]);
        i += 1;
      } else {
        // 10th frame, collect all
        rollDisplay.push([formatRoll(rolls[i]), formatRoll(rolls[i + 1]), formatRoll(rolls[i + 2])]);
        i += 3;
      }
    } else {
      const first = formatRoll(rolls[i]);
      const second = (rolls[i] + rolls[i + 1] === 10) ? "/" : formatRoll(rolls[i + 1]);

      if (frame < 10) {
        rollDisplay.push([first, second]);
        i += 2;
      } else {
        // 10th frame
        const third = rolls[i + 2] !== undefined ? formatRoll(rolls[i + 2]) : "";
        rollDisplay.push([first, second, third]);
        i += (third !== "") ? 3 : 2;
      }
    }
  }

  // Score acumulado por frame
  frameScores = calcFrameScores(rolls);

  // Añadir filas a la tabla
  table.push(
    { "Rolls": rollDisplay.map(r => r.join(" ")).slice(0, 10) },
    { "Score": frameScores.map(s => s.toString()).slice(0, 10) }
  );

  console.log(table.toString());
}

function formatRoll(val) {
  if (val === 10) return "X";
  if (val === 0) return "-";
  return val.toString();
}

function calcFrameScores(rolls) {
  let scores = [];
  let frameIndex = 0;
  let total = 0;
  for (let frame = 0; frame < 10; frame++) {
    if (rolls[frameIndex] === 10) {
      total += 10 + (rolls[frameIndex + 1] || 0) + (rolls[frameIndex + 2] || 0);
      scores.push(total);
      frameIndex += 1;
    } else if ((rolls[frameIndex] || 0) + (rolls[frameIndex + 1] || 0) === 10) {
      total += 10 + (rolls[frameIndex + 2] || 0);
      scores.push(total);
      frameIndex += 2;
    } else {
      total += (rolls[frameIndex] || 0) + (rolls[frameIndex + 1] || 0);
      scores.push(total);
      frameIndex += 2;
    }
  }
  return scores;
}
