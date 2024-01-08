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
      <section>
        <h1
          style={{
            padding: "20px",
            textAlign: "center",
            color: color,
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          Random Color Changer
        </h1>
        <div className="container">
          <div className="btns">
            <button onClick={randomColor}>Tap Me</button>

            <button onClick={() => setColor("#242424")}>Reset</button>
          </div>

          <div
            style={{
              backgroundColor: color,
              width: "500px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
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
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
