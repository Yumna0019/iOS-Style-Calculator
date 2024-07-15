import React, { useState } from "react";
import './index.css';

function Calculator() {
  const [result, setResult] = useState("button.name");

  return (
    <div className="calculator">
      <div className="result">
        <span>0</span>
      </div>

      <div className="buttons">
        <button className="AC three-btn">AC</button>
        <button className="three-btn">+/-</button>
        <button className="three-btn">%</button>
        <button className="operator">&divide;</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator">&times;</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operator">-</button>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button className="operator">+</button>
        <button className="zero">0</button>
        <button >.</button>
        <button className="operator">=</button>
      </div>
    </div>
  );
}

export default Calculator;
