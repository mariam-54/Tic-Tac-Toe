import React, { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import "./BoardGame.css";
import BoardGameCard from "./BoardGameCard";
import { GameContext } from "../../Context/GameContext";
import { ModelContext } from "../../Context/ModelContext";

const BoardGame = () => {
  const { squares, nextX, ties, winner, winnerLine, playMode, activeUser } =
    useContext(GameContext);
  const { showModel, setModelMode } = useContext(ModelContext);
  const handleResetGame = () => {
    showModel();
    setModelMode("start");
  };

  const checkUser = (user) => {
    if (playMode === "cpu") {
      if (user === activeUser) {
        return "(you)";
      } else {
        return "(cpu)";
      }
    }
  };
  return (
    <div className="board">
      <div className="board-header">
        <div>
          <BsXLg style={{ color: "var(--color-blue)", fontSize: "40px" }} />
          <BsCircle
            style={{
              color: "var(--color-yellow)",
              fontSize: "40px",
              marginLeft: "10px",
            }}
          />
        </div>
        <div className="board-turn">
          {!nextX ? <BsXLg /> : <BsCircle />}
          turn
        </div>
        <div>
          <button className="btn btn-sm board-button">
            <BsArrowClockwise
              style={{ fontSize: "28px" }}
              className="restart"
              onClick={handleResetGame}
            />
          </button>
        </div>
      </div>
      <div className="board-body">
        {squares.map((sq, i) => (
          <BoardGameCard
            key={i}
            index={i}
            user={sq}
            active={winner && winnerLine && winnerLine.includes(i)}
          />
        ))}
      </div>
      <div className="board-footer">
        <div className="card bg-blue">
          <p className="text-light">x {checkUser("x")}</p>
          <strong className="text-2xl">{ties.x}</strong>
        </div>
        <div className="card bg-light">
          <p className="text-light">ties </p>
          <strong className="text-2xl">{ties.x + ties.o}</strong>
        </div>
        <div className="card bg-yellow">
          <p className="text-light">o {checkUser("o")}</p>
          <strong className="text-2xl">{ties.o}</strong>
        </div>
      </div>
    </div>
  );
};

export default BoardGame;
