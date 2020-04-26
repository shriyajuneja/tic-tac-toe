import React, { useState } from "react";
import "./ChooseSide.css";
import "../../assets/css/common.css";

function ChooseSide(props) {
  const [side, setSide] = useState("cross");
  return (
    <div className="parent">
      <div className="flex align-center column container">
        <h3 className="mb-20">Pick your side</h3>
        <div className="flex mb-20">
          <div className={`mr-5 flex column align-center ${side==='zero' && 'transition-opacity'}`}>
            <img
              src={require("../../assets/images/x.png")}
              alt="cross"
              className="icons mb-12"
            />
            <label className="radio">
              <input
                id="cross"
                value="cross"
                type="radio"
                name="type"
                checked={side === "cross"}
                onChange={(e) => {
                  setSide(e.target.value);
                }}
              />
              <span className="outer">
                <span className="inner"></span>
              </span>
            </label>
          </div>
          <div className={`mr-5 flex column align-center ${side==='cross' && 'transition-opacity'}`}>
            <img
              src={require("../../assets/images/o.png")}
              alt="zero"
              className="icons mb-12"
            />
            <label className="radio">
              <input
                id="zero"
                type="radio"
                name="type"
                value="zero"
                checked={side === "zero"}
                onChange={(e) => {
                  setSide(e.target.value);
                }}
              />
              <span className="outer">
                <span className="inner"></span>
              </span>
            </label>
          </div>
        </div>
        <button
          className="white"
          onClick={() => {
            props.history.push("/game");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ChooseSide;
