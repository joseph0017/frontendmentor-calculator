import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("");

  const handleOperator = (value) => {
    const operatorPattern = /[+\-*/]/;
    if (display === "" && value === "0") {
      return;
    }
    if (value === ".") {
      const parts = display.split(operatorPattern);
      if (parts[parts.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operatorPattern.test(value)) {
      const lastChar = display[display.length - 1] || "";
      const secondLastChar = display[display.length - 2] || "";
      if (operatorPattern.test(lastChar)) {
        if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
          setDisplay(display.slice(0, -2) + value);
          return;
        }
        setDisplay(display.slice(0, -1) + value);
        return;
      }
    }

    setDisplay(display + value);
  };
  const handleEqual = () => {
    setDisplay(eval(display).toString());
  };

  const handleClear = () => {
    setDisplay("");
  };

    const deleteKey = () => {
    if (display === "") {
      return;
    }

    const value = display.slice(0, -1);
    setDisplay(value);
  };

  return (
    <div className="main">
      <div className="calculator">
      <div className = "calc"> 
        Calc 
      </div>
      <div className = "theme"> Theme</div>
      </div>
      <div className="display">
        <div className="display-number"> {display || 0} </div>
      </div>
      <div className="calc-buttons">
        <button onClick = {() => {handleOperator('7')}} >7</button>
        <button onClick = {() => {handleOperator('8')}} >8</button>
        <button onClick = {() => {handleOperator('9')}} >9</button>
        <button className = 'del' onClick = {deleteKey}>DEL</button>
        <button onClick = {() => {handleOperator('4')}} >4</button>
        <button onClick = {() => {handleOperator('5')}} >5</button>
        <button onClick = {() => {handleOperator('6')}} >6</button>
        <button onClick = {() => {handleOperator('+')}}>+</button>
        <button onClick = {() => {handleOperator('1')}} >1</button>
        <button onClick = {() => {handleOperator('2')}} >2</button>
        <button onClick = {() => {handleOperator('3')}} >3</button>
        <button onClick = {() => {handleOperator('-')}} >-</button>
        <button onClick = {() => {handleOperator('.')}} >.</button>
        <button onClick = {() => {handleOperator('0')}} >0</button>
        <button onClick = {() => {handleOperator('/')}} >/</button>
        <button onClick = {() => {handleOperator('*')}} >x</button>
      </div>
      <div className="other-buttons">
        <button className = 'reset' onClick = {handleClear}>RESET</button>
        <button className ='equal' onClick = {handleEqual} >=</button>
      </div>
      
    </div>
  );
}

export default App;
