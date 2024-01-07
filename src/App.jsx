import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import "./App.css";

function App() {
  const [color, setColor] = useState("#242424");
  const [copyText, setCopyText] = useState("");
  const [copied, setCopied] = useState("");

  const randomColor = () => {
    setCopied("");
    let symbols = "0123456789ABCDEF";

    let rang = "#";

    for (let i = 0; i < 6; i++) {
      rang = rang + symbols[Math.floor(Math.random() * 16)];
    }
    setColor(rang);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied("Copied");
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
          <FaRegCopy />
          &nbsp;&nbsp;
          {color}
        </button>
        <p>{copied}</p>
        <button onClick={() => setColor("#242424")}>Reset</button>
      </div>
    </>
  );
}

export default App;
