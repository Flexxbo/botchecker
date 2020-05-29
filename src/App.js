import React from "react";
import "./App.css";
import Maincomponent from "./components/Maincomponent";
import Captchacomponent from "./components/Captchacomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bot-Checker</h2>
        <Captchacomponent />
      </header>
      <Maincomponent />
    </div>
  );
}

export default App;
