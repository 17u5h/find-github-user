import React from 'react';
import * as S from '../../styles/headerStyles'
import {useNavigationStore} from "../../store/navigationStore";
import Search from "./Search";
import SortRepMaxToMin from "./SortRepMaxToMin";
import SortRepMinToMax from "./SortRepMinToMax";
import Logo from "../svg/Logo";

const Header = () => {

	const {isMainPage} = useNavigationStore(({isMainPage}) => ({isMainPage}))

	return (
		<S.Header>
			<Logo/>
			{isMainPage && <Search/>}
			<S.HeaderButtonsBlock>
				<SortRepMaxToMin/>
				<SortRepMinToMax/>
			</S.HeaderButtonsBlock>
		</S.Header>
	);
};

export default Header;