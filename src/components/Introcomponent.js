/******************************************
 *  Author : Flexxbo
 *  Created On : Sat May 30 2020
 *  File : Introcomponent.js
 *******************************************/

/*===Put imports here===*/
import React, { useEffect } from "react";
import "./Introcomponent.css";

/*===Start code here===*/

function Introcomponent() {
  const nextPage = (event) => {
    window.location.href = "/Step1";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPage();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p id="h1">Bot-Checker</p>
      </header>
    </div>
  );
}

export default Introcomponent;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
