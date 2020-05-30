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
        <h3>Step 3/3</h3>

        <p>
          You are most likely a bot. There is a slight chance you are human if
          you answer this last question correctly.
        </p>

        <p>Are you a bot?</p>
        <a href="/Result">
          <button id="yes">Yes</button>
        </a>
      </header>
    </div>
  );
}
