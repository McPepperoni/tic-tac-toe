import React from "react";
import { Announcer, Cover, Name, PlayerInfo, Timer } from "./styles";

export function UI({ winner, IGNs, currentPlayer, seconds, minutes }) {
  return (
    <>
      <Timer style={{ top: "0" }} className="timer">
        <Name>{IGNs.player1}</Name>
        <p>
          {
            minutes.toString().padStart(2, "0") +
            ":" +
            seconds.toString().padStart(2, "0")}
        </p>
        <Name>{IGNs.player2}</Name>
      </Timer>
      <PlayerInfo
        currentPlayer={currentPlayer}
        style={{ bottom: "0" }}
        className="players"
      >
        ✖<span>{currentPlayer === 1 ? "✖" : "O"}</span>O
      </PlayerInfo>
      {winner !== 0 ? (
        <Cover isWon={winner}>
          <Announcer>
            {winner !== 3 ? <span>{winner === 1 ? "✖" : "O"}</span> : null}
            {winner === 3 ? "DRAW" : "WON"}
          </Announcer>
        </Cover>
      ) : null}
    </>
  );
}
