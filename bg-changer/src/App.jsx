import "./App.css";

function App() {
  const handleRed = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <div className="container">
        <div className="colors">
          <button className="red" onClick={() => handleRed("red")}>
            Red
          </button>
          <button className="yellow" onClick={() => handleRed("yellow")}>
            Yellow
          </button>
          <button className="black" onClick={() => handleRed("black")}>
            Black
          </button>
          <button className="purple" onClick={() => handleRed("purple")}>
            Purple
          </button>
          <button className="green" onClick={() => handleRed("green")}>
            Green
          </button>
          <button className="blue" onClick={() => handleRed("blue")}>
            Blue
          </button>
          <button className="default" onClick={() => handleRed("white")}>
            Default
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
