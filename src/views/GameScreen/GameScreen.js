import React, { useState, useEffect } from "react";
import Settings from "../../components/settings/settings";

//styles
import "../../assets/css/common.css";
import "./GameScreen.css";

function GameScreen(props) {
  const name = "Alex";
  const size = 3;
  const [didMount, setDidMount] = useState(false);
  const [array, setArray] = useState(new Array(size * size).fill(0));
  const [turn, setTurn] = useState(true);
  const [winnerFound, setWinnerFound] = useState(false);
  const [CurrentIndex, setCurrentIndex] = useState(null);

  const announceWinner = (val) => {
    val = val === "x" ? "cross" : "zero";
    let winner =
      props.location.state && props.location.state.side !== val
        ? props.location.state.opponent.toUpperCase()
        : "ALEX";
    setTimeout(() => {
      alert(winner + " WON");
    }, 200);
    setWinnerFound(winner === "ALEX" ? "1-0" : "0-1");
  };

  const checkWinner = (val) => {
    let i = Math.floor(CurrentIndex / size);
    let j = CurrentIndex % size;

    //check row
    for (let j = 0; j < size; j++) {
      if (array[i * size + j] !== val) break;
      if (j === size - 1) {
        announceWinner(val);
      }
    }

    //check col
    for (let i = 0; i < size; i++) {
      if (array[i * size + j] !== val) break;
      if (i === size - 1) {
        announceWinner(val);
      }
    }

    //check diag
    if (i === j) {
      for (let i = 0; i < size; i++) {
        if (array[i * size + i] !== val) break;
        if (i === size - 1) {
          announceWinner(val);
        }
      }
    }

    //check anti diag (thanks rampion)
    if (i + j === size - 1) {
      for (let i = 0; i < size; i++) {
        if (array[i * size + size - 1 - i] !== val) break;
        if (i === size - 1) {
          announceWinner(val);
        }
      }
    }
    setTurn(!turn);
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
    if (array[index] || winnerFound) return;
    let val =
      props.location.state && props.location.state.side === "zero"
        ? turn
          ? "o"
          : "x"
        : turn
        ? "x"
        : "o";
    setArray([
      ...array.slice(0, index),
      val,
      ...array.slice(index + 1, size * size),
    ]);
  };

  useEffect(() => {
    didMount &&
      !winnerFound &&
      checkWinner(
        props.location.state && props.location.state.side === "zero"
          ? turn
            ? "o"
            : "x"
          : turn
          ? "x"
          : "o"
      );
    // eslint-disable-next-line
  }, [array]);

  const fillRandomBlock = () => {
    let index;
    do {
      index = Math.floor(Math.random() * 9);
    } while (array[index] !== 0);
    setTimeout(() => {
      setCurrentIndex(index);
      handleClick(index);
    }, 700);
  };

  useEffect(() => {
    if (didMount) {
      if (
        props.location.state.opponent === "ai" &&
        !turn &&
        !winnerFound &&
        array.includes(0)
      ) {
        fillRandomBlock();
      }
    } else {
      setDidMount(true);
    }
    // eslint-disable-next-line
  }, [turn]);

  function TicTacToe() {
    return (
      <table>
        <tbody>
          {new Array(size).fill(0).map((element, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {new Array(size).fill(0).map((element, index) => {
                  return (
                    <td
                      key={index}
                      onClick={() => {
                        handleClick(rowIndex * size + index);
                      }}
                      className={
                        rowIndex === size - 1 && index === size - 1
                          ? ""
                          : rowIndex === size - 1
                          ? "border-right"
                          : index === size - 1
                          ? "border-bottom"
                          : "border-bottom border-right"
                      }
                    >
                      {array[rowIndex * size + index] === "x" ? (
                        <img
                          src={require("../../assets/images/x.png")}
                          alt="cross"
                          className="table-icon"
                        />
                      ) : array[rowIndex * size + index] === "o" ? (
                        <img
                          src={require("../../assets/images/o.png")}
                          alt="cross"
                          className="table-icon"
                        />
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return (
    <div className="parent">
      <div className="flex align-center column container">
        <div className="flex align-center mb-6">
          <h3 className={turn ? "theme-color mr-5" : "mr-5"}>{name}</h3>
          <button className="white mr-5 bold w-25">
            {winnerFound ? winnerFound : "0 - 0"}
          </button>
          <h3 className={turn ? "" : "theme-color"}>
            {props.location.state.opponent === "ai" ? "AI" : "Friend"}
          </h3>
        </div>
        <TicTacToe />
        <Settings />
      </div>
    </div>
  );
}

export default GameScreen;
