import { useState } from 'react';
import side1 from '../assets/images/dice1.png';
import side2 from '../assets/images/dice2.png';
import side3 from '../assets/images/dice3.png';
import side4 from '../assets/images/dice4.png';
import side5 from '../assets/images/dice5.png';
import side6 from '../assets/images/dice6.png';
import side0 from '../assets/images/dice-empty.png';
const sides = [side0, side1, side2, side3, side4, side5, side6];
// const testTimeout = setTimeout(func, 0);

const Dice = () => {
  // Initialize with random from Array without element with idx 0.
  const getASide = sides[Math.floor(Math.random() * 6 + 1)],
    [dice, setDice] = useState(getASide);
  /* Okay, it won't work because the images of the dice are not in static/public dir. 🧐🚩
  const diceRandom = () =>
    `../assets/images/dice${Math.floor(Math.random() * 6 + 1)}.png`; */
  const rollDice = () => {
    setDice(sides[0]);
    setTimeout(() => setDice(getASide), 1000);
  };

  return (
    <div className="box">
      <h2>Dice</h2>
      <img
        src={dice}
        onClick={rollDice}
        style={{ width: '120px' }}
        alt="Dice"
      />
    </div>
  );
};

export default Dice;
