import { createContext, useContext, useEffect, useState } from "react";
import { calcBestStep, calcWinner } from "../logicGame/calcSquares";
import { ModelContext } from "./ModelContext";
const GameContext = createContext();
const GameState = (props) => {
  const { showModel, setModelMode, hideModel } = useContext(ModelContext);
  const [screen, setScreen] = useState("start"); //start or game
  const [activeUser, setActiveUser] = useState("x"); // x || o
  const [playMode, setPlayMode] = useState("cpu"); // user || cpu
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [nextX, setNextX] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0, no: 0 });

  useEffect(() => {
    checkNoWinner();
    const currentUser = nextX ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextStep(squares);
    }
  }, [nextX, winner, screen]);

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen("game");
  };
  const handleSquareClick = (index) => {
    if (squares[index] || winner) {
      return;
    }
    const currentUser = nextX ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }
    let newSquare = [...squares];
    newSquare[index] = !nextX ? "x" : "o";
    setSquares(newSquare);
    setNextX(!nextX);

    //checkWinner
    checkWinner(newSquare);
  };

  // Check Winner
  const checkWinner = (newSquare) => {
    const isWinner = calcWinner(newSquare);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);

      // Set ties
      const newTies = { ...ties };
      newTies[isWinner.winner] += 1;
      setTies(newTies);
      showModel();
      setModelMode("winner");
      showModel();
      setModelMode("winner");
    }
  };

  // check no winner
  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");

    if (moves.length === 0) {
      setWinner("No winner");
      showModel();
      setModelMode("winner");
    }
  };
  const handleReset = () => {
    setSquares(new Array(9).fill(""));
    setNextX(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hideModel();
    setScreen("start");
  };
  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setNextX(winner === "x");
    setWinner(null);
    setWinnerLine(null);
    hideModel();
  };

  const cpuNextStep = (squares) => {
    const bestStep = calcBestStep(squares, activeUser === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestStep] = !nextX ? "x" : "o";
    setSquares(ns);
    setNextX(!nextX);
    checkWinner(ns);
  };
  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        squares,
        nextX,
        ties,
        winner,
        winnerLine,
        playMode,
        handleReset,
        handleNextRound,
        setActiveUser,
        changePlayMode,
        handleSquareClick,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
