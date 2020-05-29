/******************************************
 *  Author : Flexxbo
 *  Created On : Fri May 29 2020
 *  File : captchacomponent.js
 *******************************************/

/*===Put imports here===*/
import React from "react";
import "./captchacomponent.css";

/*===Start code here===*/

export default function captchacomponent() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Step 1/5</h3>
        <div className="outsidebox">
          <div className="captchalabel primary">
            <p>
              Select all squares with <b>traffic lights</b>
            </p>
          </div>
          <div className="captcha">
            <div>
              <input type="checkbox" id="btnControl" />
              <label class="btn" for="btnControl">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl2" />
              <label className="btn" for="btnControl2">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl3" />
              <label class="btn" for="btnControl3">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl4" />
              <label className="btn" for="btnControl4">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
            </div>
            <div>
              <input type="checkbox" id="btnControl5" />
              <label class="btn" for="btnControl5">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl6" />
              <label class="btn" for="btnControl6">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl7" />
              <label class="btn" for="btnControl7">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl8" />
              <label class="btn" for="btnControl8">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
            </div>
            <div>
              <input type="checkbox" id="btnControl9" />
              <label class="btn" for="btnControl9">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl10" />
              <label class="btn" for="btnControl10">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl11" />
              <label class="btn" for="btnControl11">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl12" />
              <label class="btn" for="btnControl12">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
            </div>
            <div>
              <input type="checkbox" id="btnControl13" />
              <label class="btn" for="btnControl13">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl14" />
              <label class="btn" for="btnControl14">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl15" />
              <label class="btn" for="btnControl15">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
              <input type="checkbox" id="btnControl16" />
              <label class="btn" for="btnControl16">
                <img
                  className="captchapic"
                  src={"images/logo192.png"}
                  alt="Logo"
                  //id="btnLeft"
                />
              </label>
            </div>
            <div className="captchafooter">
              <div className="icons">
                <img
                  className="captchicons"
                  src={"images/logo192.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  src={"images/logo192.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  src={"images/logo192.png"}
                  alt="Logo"
                />
              </div>
              <button className="captchabutton">Verify</button>
            </div>
          </div>
        </div>
        <img
          className="progressbar"
          src={"images/ProgressBar.png"}
          alt="Logo"
        />
      </header>
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
