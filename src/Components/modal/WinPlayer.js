import React, { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { GameContext } from "../../Context/GameContext";

const WinPlayer = () => {
  const { winner, handleReset, handleNextRound } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "No winner" ? (
        <>
          <p className="text-lg ">you win!</p>
          <h3
            className={`store-title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}
          >
            {winner === "x" ? (
              <BsXLg
                color="var(--color-blue-dark)"
                fontSize={"3rem"}
                className="win-icon"
              />
            ) : (
              <BsCircle
                color="var( --color-yellow-dark)"
                fontSize={"3rem"}
                className="win-icon"
              />
            )}
            Takes the round{" "}
          </h3>
        </>
      ) : (
        <h3 className="store-title text-yellow">No Winner</h3>
      )}
      <div className="score-btn">
        <button className="btn btn-sm " onClick={handleReset}>
          Quit
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleNextRound}>
          Next Round
        </button>
      </div>
    </div>
  );
};

export default WinPlayer;
