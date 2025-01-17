import { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <div className="number-display">
        {randomNumber !== null ? (
          <h2>{randomNumber}</h2>
        ) : (
          <p>Click to generate a number</p>
        )}
      </div>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
}

export default App;





