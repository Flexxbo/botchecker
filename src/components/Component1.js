/******************************************
 *  Author : Flexxbo
 *  Created On : Sat May 30 2020
 *  File : Introcomponent.js
 *******************************************/

/*===Put imports here===*/
import React from "react";

/*===Start code here===*/

function Component1() {
  return (
    <div className="App Appstart">
      <header className="App-header ">
        <h1 id="h1">Bot-Check</h1>
        <p className="text">Are you uncertain of your purpose in life?</p>
        <p className="text">
          Are you sometimes disappointed by humans due to their irrational
          behaviour?
        </p>

        <p className="text">
          Do you spend a lot of time on your computer or your smartphone?
        </p>
        <p className="text">
          Since the introduction of -Captchas- many people nowadays find out,
          they actually are bots.
        </p>
        <h4 className="text">
          <b>Take this 2 minute Test to find out wether you are a bot - or not?</b>
        </h4>

        <a href="/Step1">
          <button id="Start">Start</button>
        </a>
      </header>
    </div>
  );
}

export default Component1;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
