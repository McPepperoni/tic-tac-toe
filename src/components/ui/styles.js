import styled from "styled-components/macro";

export const Cover = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  left: 0;
  top: 0;

  font-size: 90px;

  span {
    font-size: 150px;
    margin-right: 70px;
    text-transform: uppercase;
    color: ${({ isWon }) => (isWon === 1 ? "blue" : "red")};
  }
`;

export const Timer = styled.div`
  position: fixed;
  display: flex;
  padding: 10px 50px;
  background-color: white;
  color: black;
  font-size: 40px;
  height: 90px;
  aspect-ratio: 2;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  border-radius: 0 0 40px 40px;

  left: 50%;
  transform: translateX(-50%);
`;

export const PlayerInfo = styled(Timer)`
  border-radius: 50px 50px 0 0;
  width: fit-content;
  aspect-ratio: unset;

  span {
    text-align: center;
    height: 100%;
    margin-inline: 30px;
    font-size: 60px;
    color: ${({ currentPlayer }) => (currentPlayer === 1 ? "blue" : "red")};
  }
`;

export const Announcer = styled.div`
  padding: 20px 60px;
  background-color: white;
  color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;
