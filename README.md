Sure! Here's a fun and creative README for your React-based iOS Style Calculator:

---

# 📱 iOS Style Calculator

Welcome to the **iOS Style Calculator**! 🚀 This cool calculator, built with React, brings the sleek and intuitive iOS experience right to your browser. Ready to crunch some numbers in style? Let’s dive in! 🎉

## 🌐 Live Demo

Check out the [live demo](#) of the iOS Style Calculator and see it in action!

## ✨ Features

- **Basic Arithmetic**: Add ➕, subtract ➖, multiply ✖️, and divide ➗—all the essentials!
- **Advanced Calculations**: Handle decimals and percentages effortlessly.
- **Stylish Design**: Inspired by the clean, modern look of iOS.
- **User-Friendly**: Clear display and easy-to-use buttons for a smooth calculation experience.

## 🛠️ Built With

- **React**: The magic behind the interactive UI.
- **CSS**: To make it look like a real iOS app.
- **JavaScript**: For the brains of the calculator.

## 🧮 How to Use

1. **Tap Away**: Click on the buttons to input numbers and perform calculations.
2. **Arithmetic Operators**: Use ➕, ➖, ✖️, and ➗ for your math operations.
3. **Percentage**: Click `%` to calculate percentages.
4. **Negate**: Click `+/-` to switch between positive and negative values.
5. **Equals**: Hit `=` to get your result.
6. **Clear**: Smash the `AC` button to clear everything and start fresh.

## 🚀 Get Started

Want to run this project on your own machine? It’s super easy:

1. **Clone the Repo**:

   ```bash
   git clone https://github.com/Yumna0019/iOS-Style-Calculator.git
   cd iOS-Style-Calculator
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the App**:

   ```bash
   npm start
   ```

4. **Open in Your Browser**: Navigate to `http://localhost:3000` and start calculating!

## 📚 Code Highlights

Here's a sneak peek at the magic behind the scenes:

### State Management with Hooks

We use React's `useState` to manage the calculator's display:

```jsx
const [result, setResult] = useState("0");
```

### Handling Button Clicks

Our `handleButtonClick` function keeps the calculator responsive and functional:

```jsx
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
        setResult(String(eval(result.replace("×", "*").replace("÷", "/"))));
      } catch {
        setResult("Error");
      }
      break;
    default:
      setResult((prevResult) => prevResult + buttonName);
      break;
  }
}
```

### Beautiful and Responsive UI

Our buttons and display are styled to look and feel like an iOS calculator:

```jsx
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
```

---

Enjoy using the iOS Style Calculator! If you love it, don’t forget to ⭐ the repo. Happy calculating! 🎊

---
