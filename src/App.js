import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Captchacomponent2 from "./components/Captchacomponent2";
import Captchacomponent3 from "./components/Captchacomponent3";
import Capimg from "./components/Capimg";
import Introcomponent from "./components/Introcomponent";
import Component1 from "./components/Component1";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/"> HomePage </NavLink>
        <NavLink to="/Step1"> Step1 </NavLink>
        <NavLink to="/Step2"> Step2 </NavLink>
        <NavLink to="/Step3"> Step3 </NavLink>
        <NavLink to="/Step4"> Step4 </NavLink>
        <NavLink to="/Step5"> Step5 </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Introcomponent />
        </Route>
        <Route path="/Step1">
          <Component1 />
        </Route>
        <Route path="/Step2">
          <Captchacomponent2 />
        </Route>
        <Route path="/Step3">
          <Captchacomponent3 />
        </Route>
        <Route path="/Step4">
          <Capimg />
        </Route>
        <Route path="/Step5">
          <Captchacomponent2 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

/*       <header className="App-header">
        <h2>Bot-Checker</h2>
      </header>*/
