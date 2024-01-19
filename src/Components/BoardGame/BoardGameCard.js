import React from "react";
import { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { GameContext } from "../../Context/GameContext";

const BoardGameCard = ({ user = "nouser", active, index }) => {
  const { handleSquareClick } = useContext(GameContext);
  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"}
    ${active && user === "o" && "shadow-yellow"}
    ${!active ? "shadow-gray" : "active"}
    `}
      onClick={() => handleSquareClick(index)}
    >
      {user === "x" && (
        <BsXLg color={active && "dark"} size="lg" className="x-icon" />
      )}
      {user === "o" && (
        <BsCircle color={active && "dark"} size="lg" className="circle-icon" />
      )}
    </div>
  );
};

export default BoardGameCard;
