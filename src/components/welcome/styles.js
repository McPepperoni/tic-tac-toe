import styled from "styled-components/macro";

export const Input = styled.input.attrs({
  placeholder: "Input player name...",
})`
  border: 0;
  background-color: transparent;
  outline: none;
  color: white;
  height: 30px;

  border-bottom: 2px white solid;
`;

export const ReadyButton = styled.button`
  border: 0;
  background-color: white;
  color: black;
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  width: 100%;
  padding: 10px 0;
  border-radius: 0 0 10px 10px;
`;

export const Player = styled.div`
  transition: 150ms;
  position: relative;
  padding: 20px 60px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  overflow: hidden;

  ::after {
    content: "✓";
    display: flex;
    justify-content: center;
    font-size: 100px;
    align-items: center;
    text-align: center;
    display: ${({ ready }) => (ready === true ? "block" : "none")};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: black;
  }

  &:first-of-type {
    background-color: white;
    color: black;

    ::after {
      background-color: white;
    }

    ${Input} {
      color: black;
      border-bottom: 2px black solid;
    }

    ${ReadyButton} {
      color: white;
      background-color: black;
    }
  }
`;

export const Cover = styled.div`
  position: absolute;
  width: ${({ ready1, ready2 }) =>
    ready1 === true && ready2 === true ? "200vw" : "100vw"};
  height: 100vh;
  color: white;
  transition: 150ms;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(126, 221, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 255, 255, 1) 50%
  );

  ${Player} {
    transform: translateY(
      ${({ ready1, ready2 }) =>
        ready1 === true && ready2 === true ? "1000%" : "0"}
    );
  }
`;
