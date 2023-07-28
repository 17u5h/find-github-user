import styled from "styled-components";
import {vars} from "./_vars";

type Props = {
	$avatar_url?: string
}

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`

export const CardListContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	padding-top: 10vh;
`

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 250px;
	gap: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 0 8px #ddd;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px #888;
  }
`
export const CardImage = styled.div<Props>`
	background: #f2f2f2 url("${(props) => (props.$avatar_url)}") no-repeat center;
	width: 180px;
	height: 180px;
	background-size: cover;
`

export const UserName = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${vars.$fontsizeBigger};
	padding: 0 1vw;
`