import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#242424");
  const [copyText, setCopyText] = useState("");

  const randomColor = () => {
    let symbols = "0123456789ABCDEF";

    let rang = "#";

    for (let i = 0; i < 6; i++) {
      rang = rang + symbols[Math.floor(Math.random() * 16)];
    }
    setColor(rang);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert("Copied to Clipboard");
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <button onClick={randomColor}>Tap Me</button>
        <button
          onClick={handleCopy}
          className="colorHex"
          value={color}
          style={{ backgroundColor: color }}
          onChange={(e) => setCopyText(e)}
        >
          {color}
        </button>
        <button onClick={() => setColor("#242424")}>Reset</button>
      </div>
    </>
  );
}

export default App;
