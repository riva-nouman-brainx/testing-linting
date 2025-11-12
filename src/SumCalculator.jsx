import { useState } from "react";

const SumCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleClick = () => {
    // Removed console.log to fix linting error
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Sum Calculator</h3>
      <div
        role="button"
        style={{ cursor: "pointer", padding: "10px", border: "1px solid gray" }}
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
      >
        <input
          placeholder="First number"
          style={{ margin: "5px" }}
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <span> + </span>
        <input
          placeholder="Second number"
          style={{ margin: "5px" }}
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
        <span> = {num1 + num2}</span>
      </div>
    </div>
  );
};

export default SumCalculator;
