import React from "react";
import Settings from "../../components/settings/settings";
import "../../assets/css/common.css"

function HomePage(props) {
  function redirectToChooseSide(val) {
    props.history.push({pathname:"/choose-side",state:{opponent:val}});
  }
  return (
    <div className="parent">
      <div className="flex align-center column container">
        <div className="flex mb-15">
          <img
            src={require("../../assets/images/x.png")}
            alt="cross"
            className="icons"
          />
          <img
            src={require("../../assets/images/o.png")}
            alt="zero"
            className="icons "
          />
        </div>
        <h3 className="mb-10">Choose your play mode</h3>
        <button className="mb-3 theme" onClick={()=>redirectToChooseSide("ai")}>
          With AI
        </button>
        <button className="white mb-12" onClick={()=>redirectToChooseSide("friend")}>
          With a friend
        </button>
        <Settings/>
      </div>
    </div>
  );
}

export default HomePage;
