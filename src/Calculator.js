import React, { useState } from "react";
import { evaluate } from 'mathjs';
import './index.css';

const Calculator = () => {
  const [result, setResult] = useState("0");
  const handleButtonClick = (buttonName) => {
    // Handle number buttons
    if (!isNaN(buttonName)) {
      setResult((prevResult) => (prevResult === "0" ? buttonName : prevResult + buttonName));
      return;
    }

    switch (buttonName) {
      case "AC":
        setResult("0");
        break;
      case "+/-":
        setResult((prevResult) => (prevResult.startsWith("-") ? prevResult.slice(1) : `-${prevResult}`));
        break;
      case "%":
        setResult((prevResult) => String(parseFloat(prevResult) / 100));
        break;
      case "=":
        try {
          setResult(String(evaluate(result.replace("×", "*").replace("÷", "/"))));
        } catch {
          setResult("Error");
        }  
        break;
      default:
        setResult((prevResult) => prevResult + buttonName);
        break;
    }
  
  }  


  return (
    <div className="calculator">
      <div className="result">
        <span>{result}</span>
      </div>

      <div className="buttons">
        <button className="AC three-btn" onClick={() => handleButtonClick("AC")}>AC</button>
        <button className="three-btn" onClick={() => handleButtonClick("+/-")}>+/-</button>
        <button className="three-btn" onClick={() => handleButtonClick("%")}>%</button>
        <button className="operator" onClick={() => handleButtonClick("÷")}>&divide;</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className="operator" onClick={() => handleButtonClick("×")}>&times;</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button className="operator" onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button className="operator" onClick={() => handleButtonClick("+")}>+</button>
        <button className="zero" onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button className="operator" onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
