import React, { useState, Dispatch, SetStateAction } from 'react';

function score(x: number, y: number): number {
  const distance = Math.sqrt(x ** 2 + y ** 2);
  if (distance <= 1) {
    return 10;
  } else if (distance <= 5) {
    return 5;
  } else if (distance <= 10) {
    return 1;
  } else {
    return 0;
  }
}

function ScoreCalculator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scoreResult, setScoreResult] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<number>>) => {
    setter(Number(event.target.value));
  }

  const calculateScore = () => {
    setScoreResult(score(x, y));
  }

  return (
    <div>
      <input type="number" value={x} onChange={(event) => handleInputChange(event, setX)} placeholder="Ingrese X" />
      <input type="number" value={y} onChange={(event) => handleInputChange(event, setY)} placeholder="Ingrese Y" />
      <button onClick={calculateScore}>Calcular Puntuación</button>
      <p>La puntuación es: {scoreResult}</p>
    </div>
  );
}

export default ScoreCalculator;
