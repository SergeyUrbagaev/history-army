import "./App.css";
import { useState } from "react";

function App() {
  const [cose, setCose] = useState(0);
  const recordCount = function () {
    setCose(cose + 1);
  };
  return (
    <>
      <h1>histrory blog</h1>
      <button onClick={recordCount} className="but">
        count
      </button>
      <div>Счетчик: {cose}</div>
    </>
  );
}

export default App;
