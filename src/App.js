import React from "react";
import "./App.css";
import Maincomponent from "./components/Maincomponent";
import Captchacomponent2 from "./components/Captchacomponent2";
import Capimg from "./components/Capimg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bot-Checker</h2>
        <Captchacomponent2 />
      </header>
      <Maincomponent />
      <Capimg />
    </div>
  );
}

export default App;
