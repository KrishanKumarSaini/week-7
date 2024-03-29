import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [words, setWords] = useState("");
  const [para, setPara] = useState("");

  return (
    <>
      <h3 className="para">Para Generator</h3>
      <Input words={words} setWords={setWords} setPara={setPara} />
      <Para para={para} />
    </>
  );
}

function Input({ words, setWords, setPara }) {
  const wordsArray = ["apple", "body", "cat", "Daragon", "Egale", "facial"];

  const generateWords = () => {
    if (!words || words <= 0 || words != "a-z") {
      alert("Please enter a number more than Zero");
      return;
    }

    let sentence = "";
    for (let i = 0; i < words; i++) {
      const randomNum = Math.floor(Math.random() * wordsArray.length);
      sentence += wordsArray[randomNum] + " ";
    }

    setPara(sentence);
  };
  return (
    <div className="input-field">
      <input
        className="input"
        type="text"
        value={words}
        placeholder="Enter Numbers of Words"
        onChange={(e) => setWords(e.target.value)}
      />
      <button className="btn" onClick={generateWords}>
        Generate
      </button>
    </div>
  );
}

function Para({ para }) {
  return <div>{para}</div>;
}
export default App;
