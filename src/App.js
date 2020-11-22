import React, { useState, useEffect } from "react";
const API = "https://api.adviceslip.com/advice";
function App() {
  const [advice, setAdvice] = useState("");

  const generateAdvice = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    generateAdvice();
  }, []);
  return (
    <div className="box">
      <p dangerouslySetInnerHTML={{ __html: advice }}></p>
      <button onClick={generateAdvice}>
        Get new advice
        <span role="img" aria-label="laugh emoji">
          👾
        </span>
      </button>
    </div>
  );
}

export default App;
