import React from 'react';
import * as S from '../../styles/headerStyles'
import UiButton from "../ui/UiButton";
import {useSearchStore} from "../../store/searchStore";
import {fetchUsersByLogin} from "../../api/fetchUsersByLogin";
import {useUsersStore} from "../../store/usersStore";

const Search = () => {

	const {inputValue, dispatchInputValue} = useSearchStore(({inputValue, dispatchInputValue}) => ({inputValue, dispatchInputValue}))
	const {dispatchUsers} = useUsersStore(({dispatchUsers}) => ({dispatchUsers}))

	const letsSearch = () => {
		fetchUsersByLogin(inputValue, dispatchUsers)
	}
	const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') fetchUsersByLogin(inputValue, dispatchUsers)
	}


	return (
		<S.SearchBlock>
			<S.SearchField value={inputValue} onChange={(e) => dispatchInputValue(e.target.value)} onKeyDown={onPressEnter}
										 placeholder='Поиск по логину...'></S.SearchField>
			<UiButton onClick={letsSearch}>
				Искать
			</UiButton>
		</S.SearchBlock>
	);
};

export default Search;