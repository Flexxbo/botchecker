/******************************************
 *  Author : Flexxbo
 *  Created On : Fri May 29 2020
 *  File : captchacomponent.js
 *******************************************/

/*===Put imports here===*/
import React, { useState } from "react";
import Popup from "reactjs-popup";

import "./captchacomponent2.css";

/*===Start code here===*/

export default function Captchacomponent2() {
  let [personpics, setPersonpics] = useState([
    "/images/people/person1.jpg",
    "/images/people/person2.jpg",
    "/images/people/person3.jpg",
    "/images/people/person4.jpg",
    "/images/people/person5.jpg",
    "/images/people/person6.jpg",
    "/images/people/robot.png",
    "/images/people/person7.jpg",
    "/images/people/person8.jpg",
    "/images/people/person9.jpg",
    "/images/people/person10.jpg",
    "/images/people/person11.jpg",
    "/images/people/person12.jpg",
    "/images/people/person13.jpg",
    "/images/people/person14.jpg",
    "/images/people/person15.jpg",
  ]);
  var audio = new Audio("/audio/Botcheckvoice.mp3");
  const start = () => {
    audio.play();
    console.log("Meow");
  };
  let [id, setId] = useState(Math.random());
  let [buttonon, setButtonon] = useState(false);
  function shuffle(personpics) {
    setPersonpics((personpics = personpics.sort(() => Math.random() - 0.5)));
    setId(Math.random());
    setState("captchapic");
    console.log("onclicksfunction");
    console.log(personpics);
  }

  const [state, setState] = useState("captchapic");
  const changeColor = () => {
    if (state === "captchapic") {
      setState("captchapicselect");
      setPersonpics([
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
        "/images/people/robot.png",
      ]);
      setId(Math.random());
      setButtonon(true);
    } else {
      setState("captchapic");
      setButtonon(false);
    }
  };
  return (
    <div className="App Appstart">
      <header className="App-header">
        <h3>Step 2/5</h3>
        <div className="outsidebox">
          <div className="captchalabel">
            <p>
              Select the person you find <b>most attractive</b>
            </p>
          </div>
          <div className="captcha">
            <div className="column">
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[0]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[1]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[2]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[3]}
                alt="Logo"
              />
            </div>
            <div className="column">
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[4]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[5]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[6]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[7]}
                alt="Logo"
              />
            </div>{" "}
            <div className="column">
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[8]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[9]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[10]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[11]}
                alt="Logo"
              />
            </div>{" "}
            <div className="column">
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[12]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[13]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[14]}
                alt="Logo"
              />
              <img
                id={id}
                onClick={() => changeColor()}
                className={state}
                src={personpics[15]}
                alt="Logo"
              />
            </div>
            <div className="captchafooter">
              <div className="icons">
                <img
                  className="captchicons"
                  onClick={() => shuffle(personpics)}
                  src={"images/ReloadCaptcha.png"}
                  alt="Logo"
                />
                <img
                  className="captchicons"
                  onClick={start}
                  src={"images/HeadphonesCaptcha.png"}
                  alt="Logo"
                />
                <Popup
                  trigger={
                    <img
                      className="captchicons"
                      src={"images/InfoCaptcha.png"}
                      alt="Logo"
                    />
                  }
                  position="right center"
                >
                  <div>
                    <p id="popup">
                      Hey Honey, I allready know you will pick me. Don´t be shy
                      about it. The bot is hot!
                    </p>
                  </div>
                </Popup>
              </div>
              <a href="/Step3">
                <button disabled={!buttonon} className="captchabutton">
                  Verify
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          className="progressbar"
          src={"images/ProgressBar2.png"}
          alt="Logo"
        />
      </header>
    </div>
  );
}
