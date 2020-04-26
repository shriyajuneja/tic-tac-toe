import React from "react";
import "./ChooseSide.css";
import "../../assests/css/common.css"

function ChooseSide(props) {
  return (
    <div className="parent">
      <div className="flex align-center column container">
        <h3 className="mb-20">Pick your side</h3>
        <div className="flex mb-20">
          <div className="mr-5 flex column align-center">
            <img
              src={require("../../assests/images/x.png")}
              alt="cross"
              className="icons mb-12"
            />
            <label className="radio">
              <input id="type" type="radio" name="type" />
              <span className="outer">
                <span className="inner"></span>
              </span>
            </label>
          </div>
          <div className="flex column align-center">
            <img
              src={require("../../assests/images/o.png")}
              alt="zero"
              className="icons mb-12"
            />
            <label className="radio">
              <input id="type" type="radio" name="type" />
              <span className="outer">
                <span className="inner"></span>
              </span>
            </label>
          </div>
        </div>
        <button className="white" onClick={()=>{props.history.push("/game")}}>Continue</button>
      </div>
    </div>
  );
}

export default ChooseSide;
