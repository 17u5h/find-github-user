import React from 'react';
import * as S from '../../styles/headerStyles'
import {useNavigationStore} from "../../store/navigationStore";
import Search from "./Search";
import SortRepMaxToMin from "./SortRepMaxToMin";
import SortRepMinToMax from "./SortRepMinToMax";
import Logo from "../svg/Logo";
import UiButton from "../ui/UiButton";
import {useNavigate} from "react-router-dom";

const Header = () => {

	const {isMainPage, dispatchIsMainPage} = useNavigationStore(({isMainPage, dispatchIsMainPage}) => ({isMainPage, dispatchIsMainPage}))
	const navigate = useNavigate()

	const backToMainPage = () => {
		navigate('/')
		dispatchIsMainPage(true)
	}

	return (
		<S.Header>
			<Logo/>
			{isMainPage ? <Search/> : <UiButton onClick={backToMainPage}>Назад</UiButton>}
			<S.HeaderButtonsBlock>
				<SortRepMaxToMin/>
				<SortRepMinToMax/>
			</S.HeaderButtonsBlock>
		</S.Header>
	);
};

export default Header;