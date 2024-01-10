import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quiz from "./Quiz.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;