import React from "react";
import Settings from "../../components/settings/settings";

//styles
import "../../assests/css/common.css";
import "./GameScreen.css";

function GameScreen(props) {
  return (
    <div className="parent">
      <div className="flex align-center column container">
        <Settings />
      </div>
    </div>
  );
}

export default GameScreen;
