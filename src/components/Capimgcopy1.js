/******************************************
 *  Author : Flexxbo
 *  Created On : Fri May 29 2020
 *  File : Capimg.js
 *******************************************/

/*===Put imports here===*/
import React, { useState } from "react";

export default function Test(props) {
  let catpic = JSON.stringify(props.imagesource);
  console.log(catpic);
  const [state, setState] = useState("captchapic");
  const changeColor = () => {
    if (state === "captchapic") {
      setState("captchapicselect");
    } else {
      setState("captchapic");
    }
  };

  return (
    <div>
      <img
        id="1"
        onClick={() => changeColor()}
        className={state}
        src={props.imagesource}
        alt="Logo"
      />
    </div>
  );
}

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
