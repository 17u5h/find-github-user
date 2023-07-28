import styled from "styled-components";
import {vars} from "./_vars";

export const UiButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  padding: 0 1vw;
  color: #fff;
  background-color: ${vars.$colorThemeSecondary}
  border: none;
  border-radius: 10px;
  user-select: none;
  font-size: ${vars.$fontsizeBigger};
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${vars.$colorThemeHover};
  }

  &:active {
    background-color: ${vars.$colorThemeActive};
  }

  &:disabled {
    background-color: ${vars.$colorThemeDisabled};
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