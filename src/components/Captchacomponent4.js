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
        <h3 id="fader">Step 3/3</h3>
        <div className="outsidebox">
          <div id="inside">
            <p>You are most likely a bot. </p>
            <p>
              There is a slight chance you are human if you answer this last
              question correctly.
            </p>
            <img src={"images/thoughtfulEmoji.png"} alt="Logo" />
          </div>
        </div>

        <h3 className="starttest">Are you a bot?</h3>
        <a href="/Result">
          <button id="yes">Yes</button>
        </a>
        <img
          className="progressbar"
          src={"images/Progressbar33.png"}
          alt="Logo"
        />
      </header>
    </div>
  );
}
