import React, {ForwardedRef, forwardRef} from 'react';
import * as S from '../../styles/headerStyles'
import UiButton from "../ui/UiButton";
import {useSearchStore} from "../../store/searchStore";
import {useUsersStore} from "../../store/usersStore";
import {useNavigationStore} from "../../store/navigationStore";
import {API_URL} from "../../api/const/API_URL";
import {countUsersPerPage} from "../../consts/consts";
import {fetchUsers} from "../../api/fetchUsers";
import {useIsLoadingStore} from "../../store/isLoadingStore";

const Search = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {

	const {inputValue, dispatchInputValue} = useSearchStore(({inputValue, dispatchInputValue}) => ({inputValue, dispatchInputValue}))
	const {dispatchUsers, dispatchUsersAmount} = useUsersStore(({dispatchUsers, dispatchUsersAmount}) => ({dispatchUsers, dispatchUsersAmount}))
	const {dispatchCurrentURL} = useNavigationStore(({dispatchCurrentURL}) => ({dispatchCurrentURL}))
	const {dispatchIsLoading} = useIsLoadingStore(({dispatchIsLoading}) => ({dispatchIsLoading}))

	const letsSearch = () => {
		if (!inputValue) dispatchUsers([])
		const url = `${API_URL}?q=${inputValue}&per_page=${countUsersPerPage}`
		dispatchCurrentURL(url)
		fetchUsers(url, dispatchUsers, dispatchIsLoading, dispatchUsersAmount)
	}
	const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') letsSearch()
	}

	return (
		<S.SearchBlock>
			<S.SearchField value={inputValue}
										 onChange={(e) => dispatchInputValue(e.target.value)}
										 onKeyDown={onPressEnter}
										 placeholder='Поиск по логину...'
										 ref={ref}
			/>
			<UiButton onClick={letsSearch} disabled={false}>
				Искать
			</UiButton>
		</S.SearchBlock>
	);
});

export default Search;