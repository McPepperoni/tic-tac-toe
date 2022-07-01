import React, { useState } from "react";
import { GameLogic } from "../GameLogic";
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
}) {
  const [checked, setChecked] = useState(0);
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
          setChecked(currentPlayer);
          setCheckedObj({ ...checkedObj, [PieceKey]: currentPlayer });
          setCurrentPlayer(() => (currentPlayer === 1 ? 2 : 1));
        }
      }}
    ></GridItem>
  );
};
