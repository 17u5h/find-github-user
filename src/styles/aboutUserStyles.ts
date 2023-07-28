import styled from "styled-components";
import {vars} from "./_vars";

type Props = {
	$avatar_url?: string
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10vw;
	padding-top: 10vh;
`
export const Image = styled.div<Props>`
	width: 40vw;
	height: 60vh;
	background: #f2f2f2 url("${props => (props.$avatar_url)}") no-repeat center;
	background-size: cover;
`
export const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4vh;
	width: 40vw;
	height: 60vh;
`
export const Title = styled.h2`
	font-size: ${vars.$fontsizeBiggest};
`
export const Id = styled.p`
	font-size: ${vars.$fontsizeBigger};
`
