import styled from "styled-components/macro";

export const Grid = styled.div`
  grid-template-columns: repeat(${({ GridSize }) => `${GridSize}, 1fr`});
  display: grid;
  background-color: black;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60px;
  width: 60px;
  border: 2px #333 solid;
  cursor: pointer;

  ::after {
    content: "";
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 7px
      ${({ currentPlayer, checked }) => {
        return checked ? "grey" : currentPlayer === 1 ? "blue" : "red";
      }}
      dashed;
  }

  ::before {
    color: white;
    line-height: 1;
    font-size: 50px;
    text-align: center;
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;

    /* border-radius: 100%;
    border: 2px red solid; */
    content: "${({ checked }) => {
      return checked === 0 ? "" : checked === 1 ? "✖" : "O";
    }}";
  }

  &:hover {
    ::after {
      display: block;
      z-index: 9999;
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;
