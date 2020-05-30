import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Introcomponent from "./components/Introcomponent";
import Component1 from "./components/Component1";
import Captchacomponent2 from "./components/Captchacomponent2";
import Captchacomponent3 from "./components/Captchacomponent3";
import Captchacomponent4 from "./components/Captchacomponent4";
import Resultcomponent from "./components/Resultcomponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Introcomponent />
        </Route>
        <Route path="/Start">
          <Component1 />
        </Route>
        <Route path="/Step1">
          <Captchacomponent2 />
        </Route>
        <Route path="/Step2">
          <Captchacomponent3 />
        </Route>
        <Route path="/Step3">
          <Captchacomponent4 />
        </Route>
        <Route path="/Result">
          <Resultcomponent />
        </Route>
      </Switch>
      <nav>
        <NavLink to="/"> HomePage </NavLink>
        <NavLink to="/Start"> Start </NavLink>
        <NavLink to="/Step1"> Step1 </NavLink>
        <NavLink to="/Step2"> Step2 </NavLink>
        <NavLink to="/Step3"> Step3 </NavLink>
        <NavLink to="/Result"> Result </NavLink>
      </nav>
    </div>
  );
}

export default App;

/*       <header className="App-header">
        <h2>Bot-Checker</h2>
      </header>*/
