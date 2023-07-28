import React, {useEffect, useState} from 'react';
import {useSearchStore} from "../../store/searchStore";
import {useUsersStore} from "../../store/usersStore";
import {useNavigationStore} from "../../store/navigationStore";
import {API_URL} from "../../api/const/API_URL";
import {countUsersPerPage} from "../../consts/consts";
import {fetchUsers} from "../../api/fetchUsers";
import UiButton from "../ui/UiButton";
import {useIsLoadingStore} from "../../store/isLoadingStore";

type Props = {
	order: string
	children: string
}

const SortByRepositoriesCount = ({order, children}: Props) => {
	const {inputValue} = useSearchStore(({inputValue}) => ({inputValue}))
	const {users, dispatchUsers} = useUsersStore(({users, dispatchUsers}) => ({users, dispatchUsers}))
	const {dispatchCurrentURL} = useNavigationStore(({dispatchCurrentURL}) => ({ dispatchCurrentURL}))
	const {dispatchIsLoading} = useIsLoadingStore(({dispatchIsLoading}) => ({dispatchIsLoading}))
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

	const clickHandler = () => {
		const url = `${API_URL}?q=${inputValue}&sort=repositories&order=${order}&per_page=${countUsersPerPage}`
		dispatchCurrentURL(url)
		fetchUsers(url, dispatchUsers, dispatchIsLoading)
	}
	useEffect(() => {
		users.length > 0 ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
	},[users])

	return (
		<UiButton onClick={clickHandler} disabled={isButtonDisabled}>
			{children}
		</UiButton>
	);
};

export default SortByRepositoriesCount;