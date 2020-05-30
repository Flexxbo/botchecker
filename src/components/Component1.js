/******************************************
 *  Author : Flexxbo
 *  Created On : Sat May 30 2020
 *  File : Introcomponent.js
 *******************************************/

/*===Put imports here===*/
import React, { useEffect, useState } from "react";
import "./Introcomponent.css";
/*===Start code here===*/

function Component1() {
  let [content, setContent] = useState(
    "Do you spend a lot of time on your computer or your smartphone?"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let strings2 = [
        "Are you uncertain of your purpose in life?",
        "Are you sometimes disappointed by humans due to their irrational behaviour?",
        "Do you spend a lot of time on your computer or your smartphone?",
      ];
      let i = Math.floor(Math.random() * 3);
      setContent(strings2[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App Appstart">
      <header className="App-header ">
        <h1 id="h1">Bot-Check</h1>

        <h3 id="fader">{content}</h3>

        <div className="outsidebox">
          <img src="/images/fakenewspaper.png" alt="Logo" />
        </div>
        <h4 className="starttest">
          <b>
            Take this 2 minute Test to find out wether you are a bot - or not?
          </b>
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
/*
 <h3>Are you uncertain of your purpose in life?</h3>

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
          </p>s

            let strings = [
    "Are you uncertain of your purpose in life?",
    "Are you sometimes disappointed by humans due to their irrational behaviour?",
    "Do you spend a lot of time on your computer or your smartphone?",
  ];
*/
