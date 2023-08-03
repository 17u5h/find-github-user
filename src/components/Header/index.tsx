import React, {ForwardedRef, forwardRef} from 'react';
import * as S from '../../styles/headerStyles'
import Search from "./Search";
import Logo from "../svg/Logo";
import UiButton from "../ui/UiButton";
import {useNavigate} from "react-router-dom";
import SortByRepositoriesCount from "./SortByRepositoriesCount";

type Props = {
	isMainPage:boolean
}

const Header = forwardRef(({isMainPage}: Props, ref: ForwardedRef<HTMLInputElement>) => {

	const navigate = useNavigate()

	const backToMainPage = () => {
		navigate('/')
	}

	return (
		<S.Header>
			<Logo onClick={backToMainPage}/>
			{isMainPage ? <Search ref={ref}/> : <UiButton onClick={backToMainPage}>Назад</UiButton>}
			<S.HeaderButtonsBlock>
				<SortByRepositoriesCount order={'desc'}>много репозиториев</SortByRepositoriesCount>
				<SortByRepositoriesCount order={'asc'}>мало репозиториев</SortByRepositoriesCount>
			</S.HeaderButtonsBlock>
		</S.Header>
	);
});

export default Header;