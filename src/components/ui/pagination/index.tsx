import React, { useState } from 'react'
import {Pagination} from 'react-bootstrap'
import {useNavigationStore} from "../../../store/navigationStore";
import {fetchUsers} from "../../../api/fetchUsers";
import {useUsersStore} from "../../../store/usersStore";
import * as S from "../../../styles/commonStyles";


const PaginationComponent = () => {
	const {currentURL} = useNavigationStore(({currentURL}) => ({currentURL}))
	const {dispatchUsers} = useUsersStore(({dispatchUsers}) => ({dispatchUsers}))
	const [currentPage, setCurrentPage] = useState<number>(1)

	const paginationItems = []

	const handleClick = (currentPage: number) => {
		setCurrentPage(currentPage)
		const url = `${currentURL}&page=${currentPage}`
		fetchUsers(url, dispatchUsers)
	}
	for (let i = 1; i <= 10; i++) {
		paginationItems.push(
			<Pagination.Item key={i} onClick={() => handleClick(i)} active={i === currentPage}>
				{i}
			</Pagination.Item>
		)
	}

	return (
		<S.PaginationContainer>
			<Pagination>{paginationItems}</Pagination>
		</S.PaginationContainer>
	)
}

export default PaginationComponent