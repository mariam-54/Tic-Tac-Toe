import React, { useContext } from "react";
import "./Model.css";
import WinPlayer from "./WinPlayer";
import RestartGame from "./RestartGame";
import { ModelContext } from "../../Context/ModelContext";

const Model = () => {
  const { show, modelMode } = useContext(ModelContext);

  return (
    <>
      {show && (
        <div className="model">
          <div className="model-content">
            <div className="container">
              {modelMode === "winner" && <WinPlayer />}
              {modelMode === "start" && <RestartGame />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
