import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { ModelContext } from "../../Context/ModelContext";

const RestartGame = () => {
  const { handleReset } = useContext(GameContext);
  const { hideModel } = useContext(ModelContext);
  return (
    <div className="restart">
      <h3 className="restart-title"> Restart Game ?</h3>
      <div className="restart-btns">
        <button className="btn btn-sm" onClick={hideModel}>
          Cancel
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleReset}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default RestartGame;
