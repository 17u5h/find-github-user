import React from 'react';
import * as S from '../../styles/headerStyles'
import UiButton from "../ui/UiButton";
import {useSearchStore} from "../../store/searchStore";
import {useUsersStore} from "../../store/usersStore";
import {useNavigationStore} from "../../store/navigationStore";
import {API_URL} from "../../api/const/API_URL";
import {countUsersPerPage} from "../../consts/consts";
import {fetchUsers} from "../../api/fetchUsers";

const Search = () => {

	const {inputValue, dispatchInputValue} = useSearchStore(({inputValue, dispatchInputValue}) => ({inputValue, dispatchInputValue}))
	const {dispatchUsers} = useUsersStore(({dispatchUsers}) => ({dispatchUsers}))
	const { dispatchCurrentURL} = useNavigationStore(({dispatchCurrentURL}) => ({dispatchCurrentURL}))


	const letsSearch = () => {
		const url = `${API_URL}?q=${inputValue}&per_page=${countUsersPerPage}`
		dispatchCurrentURL(url)
		fetchUsers(url, dispatchUsers)
	}
	const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') letsSearch()
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