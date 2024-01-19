import { useContext } from "react";
import BoardGame from "./Components/BoardGame/BoardGame";
import Start from "./Components/Start/Start";
import Model from "./Components/modal/Model";
import { GameContext } from "./Context/GameContext";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" && <Start />}
        {screen === "game" && <BoardGame />}
      </div>
      <Model />
    </div>
  );
}

export default App;
