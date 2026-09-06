import { useState } from "react";

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncreae = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Value: {count} </p>
      <button onClick={handleIncreae}>Increase</button>
    </div>
  );
}
