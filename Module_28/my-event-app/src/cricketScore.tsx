import { useState } from "react";

export default CricketScore;

function CricketScore() {
  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore(score + 1);
  };
  const handleScore2 = () => {
    setScore(score + 2);
  };
  const handleScore4 = () => {
    setScore(score + 4);
  };
  const handleScore6 = () => {
    setScore(score + 6);
  };

  return (
    <div>
      <p>----------------------------------------------------------</p>
      <h2>Cricket Score Count</h2>
      <p>Current Score: {score} </p>
      <button onClick={handleScore}>Score Count-1</button>
      <button onClick={handleScore2}>Score Count-2</button>
      <button onClick={handleScore4}>Score Count-4</button>
      <button onClick={handleScore6}>Score Count-6</button>
      <p>----------------------------------------------------------</p>
    </div>
  );
}
