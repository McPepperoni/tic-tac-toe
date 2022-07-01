import React, { useState } from "react";
import { GameLogic, GETPosition } from "../GameLogic";
import { Container, Grid, GridItem } from "./styles";

export function Board({
  GridSize = 20,

  children,
  ...restProps
}) {
  return (
    <Container>
      <Grid GridSize={GridSize} {...restProps}>
        {children}
      </Grid>
    </Container>
  );
}

Board.Piece = function BoardPice({
  currentPlayer,
  setCurrentPlayer,
  PieceKey,
  checkedObj,
  setCheckedObj,
  size,
  setWinner,
  winner,
  stopTimer,
  isChecked = 0,
  setGridSize,
  gridSize,
}) {
  const [checked, setChecked] = useState(isChecked);
  return (
    <GridItem
      currentPlayer={currentPlayer}
      checked={checked}
      onClick={() => {
        if (checked === 0) {
          if (
            GameLogic(
              checkedObj,
              { player: currentPlayer, position: PieceKey },
              size
            ) === "win"
          ) {
            if (winner === 0) setWinner(currentPlayer);
            stopTimer();
          }

          const pos = GETPosition(PieceKey);

          setChecked(currentPlayer);
          setCheckedObj({ ...checkedObj, [PieceKey]: currentPlayer });
          setCurrentPlayer(() => (currentPlayer === 1 ? 2 : 1));

          console.log(pos);
          if (
            pos.x > gridSize / 2 - 3 ||
            pos.x < -(gridSize / 2 - 3) ||
            pos.y > gridSize / 2 - 3 ||
            pos.y < -(gridSize / 2 - 3)
          ) {
            setGridSize(() => gridSize + 1);
            console.log(checkedObj);
          }
        }
      }}
    ></GridItem>
  );
};
