import React from 'react';
import UiButton from "../ui/UiButton";
import {fetchSortByRepositoriesCount} from "../../api/fetchSortByRepositoriesCount";
import {useSearchStore} from "../../store/searchStore";
import {useUsersStore} from "../../store/usersStore";

const SortRepMinToMax = () => {
	const {inputValue} = useSearchStore(({inputValue}) => ({inputValue}))
	const {dispatchUsers} = useUsersStore(({dispatchUsers}) => ({dispatchUsers}))

	const clickHandler = () => {
		const isMaxToMin = false
		fetchSortByRepositoriesCount(inputValue, dispatchUsers, isMaxToMin)
	}

	return (
		<UiButton onClick={clickHandler}>
			мало репозиториев
		</UiButton>
	);
};

export default SortRepMinToMax;