import React from 'react';
import * as S from '../../styles/headerStyles'
import Search from "./Search";
import Logo from "../svg/Logo";
import UiButton from "../ui/UiButton";
import {useNavigate} from "react-router-dom";
import SortByRepositoriesCount from "./SortByRepositoriesCount";

type Props = {
	isMainPage:boolean
}

const Header = ({isMainPage}: Props) => {

	const navigate = useNavigate()

	const backToMainPage = () => {
		navigate('/')
	}

	return (
		<S.Header>
			<Logo onClick={backToMainPage}/>
			{isMainPage ? <Search/> : <UiButton onClick={backToMainPage}>Назад</UiButton>}
			<S.HeaderButtonsBlock>
				<SortByRepositoriesCount order={'desc'}>много репозиториев</SortByRepositoriesCount>
				<SortByRepositoriesCount order={'asc'}>мало репозиториев</SortByRepositoriesCount>
			</S.HeaderButtonsBlock>
		</S.Header>
	);
};

export default Header;