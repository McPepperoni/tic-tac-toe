import React, { useState } from "react";
import { Announcer, Cover, PlayerInfo, Timer } from "./styles";

export function UI({ winner, IGNs, currentPlayer, seconds, minutes, hours }) {
  return (
    <>
      <Timer style={{ top: "0" }} className="timer">
        {hours.toString().padStart(2, "0") +
          ":" +
          minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0")}
      </Timer>
      <PlayerInfo
        currentPlayer={currentPlayer}
        style={{ bottom: "0" }}
        className="players"
      >
        {IGNs.player1} ✖<span>{currentPlayer === 1 ? "✖" : "O"}</span>O{" "}
        {IGNs.player2}
      </PlayerInfo>
      {winner !== 0 ? (
        <Cover isWon={winner}>
          <Announcer>
            <span>{winner === 1 ? "✖" : "O"}</span>
            WON
          </Announcer>
        </Cover>
      ) : null}
    </>
  );
}
