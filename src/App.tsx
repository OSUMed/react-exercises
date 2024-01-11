import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quiz from "./HexColorQuiz.tsx";
import DataMuse from "./DataMuse.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Quiz /> */}
      <DataMuse />
    </div>
  );
}

export default App;
