import React from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const time = "100";

  return (
    <div className="App">
      <Counter setTime={time} />
    </div>
  );
}

export default App;
