/******************************************
 *  Author : Flexxbo
 *  Created On : Fri May 29 2020
 *  File : captchacomponent.js
 *******************************************/

/*===Put imports here===*/
import React, { useState } from "react";
import "./captchacomponent2.css";
import Capimg from "../components/Capimg";
import Capimgcopy from "../components/Capimgcopy";

/*===Start code here===*/

export default function Captchacomponent2() {
  //let [catpics2, setCatpics2] = useState(catpics);
  let [catpics, setCatpics] = useState([
    "/images/cats/cat1.jpg",
    "/images/cats/cat2.jpg",
    "/images/cats/cat3.jpg",
    "/images/cats/cat4.jpg",
    "/images/cats/cat5.jpg",
    "/images/cats/cat6.jpg",
    "/images/cats/cat7.jpg",
    "/images/cats/cat8.jpg",
    "/images/cats/cat9.jpg",
    "/images/cats/cat10.jpg",
    "/images/cats/cat11.jpg",
    "/images/cats/cat12.jpg",
    "/images/cats/cat13.jpg",
    "/images/cats/cat14.jpg",
    "/images/cats/cat15.jpg",
    "/images/cats/cat16.jpg",
  ]);
  function shuffle(catpics) {
    setCatpics((catpics = catpics.sort(() => Math.random() - 0.5)));
    console.log("onclicksfunction");
    console.log(catpics);
  }

  return (
    <div className="App Appstart">
      <header className="App-header">
        <h3>Step 1/5</h3>
        <div className="outsidebox">
          <div className="captchalabel">
            <p>
              Select all squares with <b>traffic lights</b>
            </p>
          </div>
          <div className="captcha">
            <div className="column">
              <Capimgcopy imagesource={catpics[0]} />
              <Capimgcopy imagesource={catpics[1]} />
              <Capimgcopy imagesource={catpics[2]} />
              <Capimgcopy imagesource={catpics[3]} />
            </div>
            <div className="column">
              <Capimgcopy imagesource={catpics[4]} />
              <Capimgcopy imagesource={catpics[5]} />
              <Capimgcopy imagesource={catpics[6]} />
              <Capimgcopy imagesource={catpics[7]} />
            </div>
            <div className="column">
              <Capimgcopy imagesource={catpics[8]} />
              <Capimgcopy imagesource={catpics[9]} />
              <Capimgcopy imagesource={catpics[10]} />
              <Capimgcopy imagesource={catpics[11]} />
            </div>
            <div className="column">
              <Capimgcopy imagesource={catpics[12]} />
              <Capimgcopy imagesource={catpics[13]} />
              <Capimgcopy imagesource={catpics[14]} />
              <Capimgcopy imagesource={catpics[15]} />
            </div>

            <div className="captchafooter">
              <div className="icons">
                <img
                  className="captchicons"
                  onClick={() => shuffle(catpics)}
                  src={"images/ReloadCaptcha.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  src={"images/HeadphonesCaptcha.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  src={"images/InfoCaptcha.png"}
                  alt="Logo"
                />
              </div>
              <a href="/Step3">
                <button className="captchabutton">Verify</button>
              </a>
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
