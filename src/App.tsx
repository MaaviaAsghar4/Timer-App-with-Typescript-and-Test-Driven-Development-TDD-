import React from "react";
import "./App.css";
import Timer from "./Components/Timer";

const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
