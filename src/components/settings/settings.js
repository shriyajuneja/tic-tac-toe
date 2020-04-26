import React from "react";
import { withRouter } from "react-router-dom";
import "./settings.css";
function Settings(props) {
  return (
    <div className="setting-container">
      <img
        src={require("../../assests/images/settings.svg")}
        alt="settings"
        onClick={() => props.history.push("/")}
      />
    </div>
  );
}

export default withRouter(Settings);
