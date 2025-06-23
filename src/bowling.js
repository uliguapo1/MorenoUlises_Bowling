const calcScore = (rolls) => {
  let score = 0;
  let frameIndex = 0;
  for (let frame = 0; frame < 10; frame++) {
    if (rolls[frameIndex] === 10) {
      score += 10 + (rolls[frameIndex + 1] || 0) + (rolls[frameIndex + 2] || 0);
      frameIndex += 1;
    } else if ((rolls[frameIndex] || 0) + (rolls[frameIndex + 1] || 0) === 10) {
      score += 10 + (rolls[frameIndex + 2] || 0);
      frameIndex += 2;
    } else {
      score += (rolls[frameIndex] || 0) + (rolls[frameIndex + 1] || 0);
      frameIndex += 2;
    }
  }
  return score;
};

const generateRandomGame = () => {
  const rolls = [];

  for (let frame = 1; frame <= 10; frame++) {
    let firstRoll = Math.floor(Math.random() * 11);
    rolls.push(firstRoll);

    if (frame < 10) {
      if (firstRoll < 10) {
        let secondRoll = Math.floor(Math.random() * (11 - firstRoll));
        rolls.push(secondRoll);
      }
    } else {
      // 10th frame special handling
      if (firstRoll === 10) {
        let secondRoll = Math.floor(Math.random() * 11);
        rolls.push(secondRoll);
        let thirdRoll = Math.floor(Math.random() * 11);
        rolls.push(thirdRoll);
      } else {
        let secondRoll = Math.floor(Math.random() * (11 - firstRoll));
        rolls.push(secondRoll);

        if (firstRoll + secondRoll === 10) {
          let thirdRoll = Math.floor(Math.random() * 11);
          rolls.push(thirdRoll);
        }
      }
    }
  }

  return rolls;
};

export { calcScore, generateRandomGame };
