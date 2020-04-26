import React from "react";
import Settings from "../../components/settings/settings";
import "../../assets/css/common.css"

function HomePage(props) {
  function redirectToChooseSide() {
    props.history.push("/choose-side");
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
        <button className="mb-3 theme" onClick={redirectToChooseSide}>
          With AI
        </button>
        <button className="white mb-12" onClick={redirectToChooseSide}>
          With a friend
        </button>
        <Settings/>
      </div>
    </div>
  );
}

export default HomePage;
