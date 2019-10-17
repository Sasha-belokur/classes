import React from "react";

import Title from "./components/Title";
import Estimate from "./components/Estimate";
import Resolution from "./components/Resolution";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Resolution />
      <Estimate />
    </div>
  );
}

export default App;
