import React, { useRef, useState } from "react";
import { Cover, Input, Player, ReadyButton } from "./styles";

export function Welcome({ setPlayer1, setPlayer2, player1, player2 }) {
  const Input1 = useRef(null);
  const Input2 = useRef(null);

  const [warning1, setWarning1] = useState(false);
  const [warning2, setWarning2] = useState(false);

  const handleReady = (input) => {
    input.current.value === ""
      ? input === Input1
        ? setWarning1(true)
        : setWarning2(false)
      : input === Input1
      ? setPlayer1({ ready: true, ign: input.current.value })
      : setPlayer2({ ready: true, ign: input.current.value });
  };

  return (
    <>
      <Cover ready1={player1.ready} ready2={player2.ready}>
        <Player ready={player1.ready}>
          Player 1
          <Input ref={Input1} />
          <ReadyButton onClick={() => handleReady(Input1)}>READY</ReadyButton>
        </Player>
        <Player ready={player2.ready}>
          Player 2
          <Input ref={Input2} />
          <ReadyButton onClick={() => handleReady(Input2)}>READY</ReadyButton>
        </Player>
      </Cover>
    </>
  );
}
