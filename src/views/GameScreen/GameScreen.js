import React from "react";
import Settings from "../../components/settings/settings";

//styles
import "../../assests/css/common.css";
import "./GameScreen.css";

const name = "Alex";
function GameScreen(props) {
  function TicTacToe() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="border-bottom border-right">
              <img
                src={require("../../assests/images/x.png")}
                alt="cross"
                className="table-icon"
              />
            </td>
            <td className="border-bottom border-right px-2">
              <img
                src={require("../../assests/images/o.png")}
                alt="zero"
                className="table-icon"
              />
            </td>
            <td className="border-bottom"></td>
          </tr>
          <tr>
            <td className="border-bottom border-right"></td>
            <td className="border-bottom border-right px-2">
              <img
                src={require("../../assests/images/o.png")}
                alt="zero"
                className="table-icon"
              />
            </td>
            <td className="border-bottom">
              <img
                src={require("../../assests/images/o.png")}
                alt="zero"
                className="table-icon"
              />
            </td>
          </tr>
          <tr>
            <td className="border-right">
              <img
                src={require("../../assests/images/x.png")}
                alt="cross"
                className="table-icon"
              />
            </td>
            <td className="border-right px-2"></td>
            <td>
              <img
                src={require("../../assests/images/x.png")}
                alt="cross"
                className="table-icon"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <div className="parent">
      <div className="flex align-center column container">
        <div className="flex align-center mb-6">
          <h3 className="mr-5">{name}</h3>
          <button className="white mr-5 bold w-25">0 - 0</button>
          <h3>AI</h3>
        </div>
        <TicTacToe />
        <Settings />
      </div>
    </div>
  );
}

export default GameScreen;
