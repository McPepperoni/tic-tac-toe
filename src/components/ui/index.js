import React, { useState } from "react";
import { Announcer, Cover, Name, PlayerInfo, Timer } from "./styles";

export function UI({
  winner,
  IGNs,
  currentPlayer,
  seconds,
  minutes,
  hours,
  children,
  ...restProps
}) {
  return (
    <>
      {children}
      <Timer style={{ top: "0" }} className="timer">
        <Name>{IGNs.player1}</Name>
        {hours.toString().padStart(2, "0") +
          ":" +
          minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0")}
        <Name>{IGNs.player2}</Name>
        <Name>{IGNs.player2}</Name>
      </Timer>
      <PlayerInfo
        currentPlayer={currentPlayer}
        style={{ bottom: "0" }}
        className="players"
      >
        ✖<span>{currentPlayer === 1 ? "✖" : "O"}</span>O{" "}
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
