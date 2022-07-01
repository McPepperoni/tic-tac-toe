import { useEffect, useState } from "react";
import { Board } from "./components/board";
import { UI } from "./components/ui";
import { Welcome } from "./components/welcome";
import { useStopwatch } from "react-timer-hook";

function App() {
  const [player1, setPlayer1] = useState({ ready: false, ign: "" });
  const [player2, setPlayer2] = useState({ ready: false, ign: "" });

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [checked, setChecked] = useState({});
  const [isWon, setIsWon] = useState(0);
  const [gridSize, setGridSize] = useState(30);

  const { seconds, minutes, hours, pause, start } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (player1.ready === true && player2.ready === true) start();
  }, [player1.ready, player2.ready]);

  var items = [...Array(gridSize)];
  return (
    <>
      {player1.ready === true && player2.ready === true ? (
        <>
          <Board GridSize={gridSize}>
            {items.map((_, i) => {
              return items.map((_, j) => {
                const key =
                  (i - gridSize / 2 < 0 ? "-" : "+") +
                  Math.abs(i - gridSize / 2)
                    .toString()
                    .padStart(4, "0") +
                  (j - gridSize / 2 < 0 ? "-" : "+") +
                  Math.abs(j - gridSize / 2)
                    .toString()
                    .padStart(4, "0");
                return (
                  <>
                    <Board.Piece
                      size={gridSize}
                      setCurrentPlayer={setCurrentPlayer}
                      currentPlayer={currentPlayer}
                      key={key}
                      PieceKey={key}
                      checkedObj={checked}
                      setCheckedObj={setChecked}
                      setWinner={setIsWon}
                      winner={isWon}
                      stopTimer={pause}
                      isChecked={
                        Object.keys(checked).indexOf(key) > -1
                          ? checked[key]
                          : 0
                      }
                      setGridSize={setGridSize}
                      gridSize={gridSize}
                    ></Board.Piece>
                  </>
                );
              });
            })}
          </Board>
          <UI
            winner={isWon}
            currentPlayer={currentPlayer}
            IGNs={{ player1: player1.ign, player2: player2.ign }}
            seconds={seconds}
            minutes={minutes}
            hours={hours}
          >
            <button
              style={{ position: "absolute", bottom: "0" }}
              onClick={() => setGridSize(50)}
            >
              hasduhsaidhgasjhifg
            </button>
          </UI>
        </>
      ) : null}
      <Welcome
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        player1={player1}
        player2={player2}
      />
    </>
  );
}

export default App;
