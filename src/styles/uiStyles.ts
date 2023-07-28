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
	
  &:hover {
    background-color: #313bec;
  }
  &:active {
    background-color: #202bea;
  }
  &:disabled {
    background-color: #d9d9d9;
  }
	@media (max-width: 1100px) {
		font-size: ${vars.$fontsizeRegular};
	}
`