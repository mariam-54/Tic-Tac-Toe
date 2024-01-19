import React, { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import "./Start.css";
import { GameContext } from "../../Context/GameContext";
const Start = () => {
  const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);
  return (
    <div className="start">
      <div className="start-icons">
        <BsXLg style={{ color: "var(--color-blue)" }} />
        <BsCircle style={{ color: "var(--color-yellow)", marginLeft: "8px" }} />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick player 1'st mark</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active " : ""}
            onClick={() => setActiveUser("x")}
          >
            <BsXLg
              color={activeUser === "x" && "var( --color-bg-dark)"}
              fontSize={"45px"}
            />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active " : ""}
            onClick={() => setActiveUser("o")}
          >
            <BsCircle
              color={activeUser === "o" && "var( --color-bg-dark)"}
              fontSize={"45px"}
            />
          </span>
        </div>
        <p className="text-light text-normal">remember: x goes first</p>
      </div>
      <div className="start__btns">
        <button
          className="btn btn-yellow"
          onClick={() => changePlayMode("cpu")}
        >
          new game (vs CPU)
        </button>
        <button className="btn btn-blue" onClick={() => changePlayMode("user")}>
          {" "}
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Start;
