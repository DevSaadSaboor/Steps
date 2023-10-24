import './App.css';
import { useState } from "react"


function App() {
  let [count, setCount] = useState(1)

  function handlePrevious() {
    if (count > 1)
      setCount(count - 1)
  }
  function handleNext() {
    if (count < 3) {
      setCount(count + 1)
    }
  }

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${count >= 1 ? "active" : ""} `}>1</div>
        <div className={`${count >= 2 ? "active" : ""} `}>2</div>
        <div className={`${count >= 3 ? "active" : ""} `}>3</div>
      </div >
      <p className="message"> Step{count} : {messages[count - 1]}</p>

      <div className="buttons">
        <button onClick={handlePrevious} style={{ backgroundColor: "#7950f2", color: "#fff" }}>Previous</button>
        <button onClick={handleNext} style={{ backgroundColor: "#7950f2", color: "#fff" }}>Next</button>
      </div>
    </div >
  );
}

export default App;
