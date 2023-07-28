import styled from "styled-components";
import {vars} from "./_vars";

export const UiButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  padding: 0 1vw;
  color: #fff;
  background-color: #565EEF;
  border: none;
  border-radius: 10px;
  user-select: none;
  font-size: ${vars.$fontsizeBigger};
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #313bec;
  }

  &:active {
    background-color: #1520d3;
  }

  &:disabled {
    background-color: #a6a6a6;
    cursor: not-allowed;
  }

  @media (max-width: 1100px) {
    font-size: ${vars.$fontsizeRegular};
  }
`
export const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`