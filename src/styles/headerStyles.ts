import styled from "styled-components";
import {vars} from "./_vars";

export const Header = styled.div`
	position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 80px;
	width: 100%;
  background-color: ${vars.$colorThemeMain};
`

export const SearchBlock = styled.div`
  display: flex;
	align-items: center;
  gap: 10px;
`

export const SearchField = styled.input`
  height: 5vh;
  width: 30vw;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
	font-size: ${vars.$fontsizeBigger};
	transition: box-shadow 0.2s, outline 0.2s;

  &:focus, &:hover {
    outline: 2px solid ${vars.$colorThemeSecondary};
		box-shadow: 0 0 30px ${vars.$colorThemeSecondary};
  }

  &::placeholder {
    color: #aaa;
    font-size: ${vars.$fontsizeBigger};
  }
	@media (max-width: 1100px) {
    &::placeholder {
      font-size: ${vars.$fontsizeRegular};
    }
	}
`
export const HeaderButtonsBlock = styled.div`
	display: flex;
	gap: 1vw;
`

