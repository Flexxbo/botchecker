/******************************************
 *  Author : Flexxbo
 *  Created On : Fri May 29 2020
 *  File : captchacomponent.js
 *******************************************/

/*===Put imports here===*/
import React from "react";

import "./captchacomponent2.css";

/*===Start code here===*/

export default function Captchacomponent2() {
  return (
    <div className="App Appstart">
      <header className="App-header">
        <h1 id="h1">Bot-Check</h1>
        <h3>Result</h3>

        <p>You are a bot!</p>
        <img id="ubot" src={"images/ubot.png"} alt="Logo" />
        <p>
          But don´t worry about it. Look I have allready put together some
          interesting pages for you.
        </p>
      </header>
    </div>
  );
}
