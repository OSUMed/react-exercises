import React, { useState, useEffect } from "react";
import "./index.css";

const HexColorQuiz = () => {
  const [color, setColor] = useState<string>("red");
  const [flag, setFlag] = useState(0);
  const [choice1, setChoice1] = useState<string>("");
  const [choice2, setChoice2] = useState<string>("");
  const [choice3, setChoice3] = useState<string>("");
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("gray");
  const [userInput, setUserInput] = useState<string>("");
  const handleColorChangeReq = () => {
    setColor(userInput);
  };

  function assignItemsToBoxes(items: string[]) {
    let flags = new Array(items.length).fill(false);
    let boxAssignments = [];
    let assignedCount = 0;

    while (assignedCount < items.length) {
      let randomIndex = Math.floor(Math.random() * items.length);

      // Check if the item at randomIndex is already assigned
      if (!flags[randomIndex]) {
        boxAssignments.push(items[randomIndex]);
        flags[randomIndex] = true;
        assignedCount++;
      }
    }

    return boxAssignments;
  }

  function randomColor() {
    // 256 * 256 * 256
    const randomNum = Math.floor(Math.random() * 16777215);

    let hexString = randomNum.toString(16);

    hexString = hexString.padStart(6, "0");
    // 1 2 3
    // c x x
    // 3 boxes: randomely give 1 to each..
    return "#" + hexString;
  }

  function startGame() {
    const rightColor = randomColor();
    setColor(rightColor.toString());
    const wrongColor = randomColor();
    const wrongColor2 = randomColor();
    const boxAssignments = assignItemsToBoxes([
      rightColor,
      wrongColor,
      wrongColor2,
    ]);
    setChoice1(boxAssignments[0]);
    setChoice2(boxAssignments[1]);
    setChoice3(boxAssignments[2]);
    console.log("colors are: ", wrongColor, wrongColor2, rightColor);
  }

  function handleGuess(guess: string) {
    if (guess === color) {
      setResult("You got the right answer! Thanks for Playing!");
      setResultColor("green");

      // Flag to end game:
      setFlag(0);
    } else {
      setResult("Wrong Answer. Try Again.");
      setResultColor("red");
    }
  }

  useEffect(() => {
    setColor("#FF00DD");
  }, []);

  return (
    <>
      <div>
        <div
          className="container"
          style={{
            background: color,
            display: "flex",
            flexDirection: "column",
          }}
        >
          Hello
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <button onClick={startGame}>Start Game: Random Color</button>
          <h2>Guess Game!</h2>
          <button
            onClick={() => handleGuess(choice1)}
            style={{ marginTop: "10px" }}
          >
            Guess 1: {choice1}
          </button>
          <button
            onClick={() => handleGuess(choice2)}
            style={{ marginTop: "10px" }}
          >
            Guess 2: {choice2}
          </button>
          <button
            onClick={() => handleGuess(choice3)}
            style={{ marginTop: "10px" }}
          >
            Guess 3: {choice3}
          </button>
        </div>
        <div
          style={{
            background: resultColor,
            borderWidth: "1px",
            borderStyle: "solid",
            height: "50px",
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          Content
        </div>
        Result is: {result}
      </div>
    </>
  );
};

export default HexColorQuiz;
