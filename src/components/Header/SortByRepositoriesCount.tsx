import React from 'react';
import {useSearchStore} from "../../store/searchStore";
import {useUsersStore} from "../../store/usersStore";
import {useNavigationStore} from "../../store/navigationStore";
import {API_URL} from "../../api/const/API_URL";
import {countUsersPerPage} from "../../consts/consts";
import {fetchUsers} from "../../api/fetchUsers";
import UiButton from "../ui/UiButton";

type Props = {
	order: string
	children: string
}

const SortByRepositoriesCount = ({order, children}: Props) => {
	const {inputValue} = useSearchStore(({inputValue}) => ({inputValue}))
	const {dispatchUsers} = useUsersStore(({dispatchUsers}) => ({dispatchUsers}))
	const {dispatchCurrentURL} = useNavigationStore(({dispatchCurrentURL}) => ({ dispatchCurrentURL}))

	const clickHandler = () => {
		const url = `${API_URL}?q=${inputValue}&sort=repositories&order=${order}&per_page=${countUsersPerPage}`
		dispatchCurrentURL(url)
		fetchUsers(url, dispatchUsers)
	}

	return (
		<UiButton onClick={clickHandler}>
			{children}
		</UiButton>
	);
};

export default SortByRepositoriesCount;