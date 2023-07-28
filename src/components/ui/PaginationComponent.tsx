import React, {useEffect, useState} from 'react'
import {Pagination} from 'react-bootstrap'
import {useNavigationStore} from "../../store/navigationStore";
import {fetchUsers} from "../../api/fetchUsers";
import {useUsersStore} from "../../store/usersStore";
import * as S from "../../styles/commonStyles";
import {useIsLoadingStore} from "../../store/isLoadingStore";
import {createId} from "../../lib/createId";
import {countUsersPerPage} from "../../consts/consts";

const PaginationComponent = () => {
	const {currentURL} = useNavigationStore(({currentURL}) => ({currentURL}))
	const {dispatchUsers, usersAmount, dispatchUsersAmount} = useUsersStore(({dispatchUsers, usersAmount, dispatchUsersAmount}) => ({dispatchUsers, usersAmount, dispatchUsersAmount}))
	const {dispatchIsLoading} = useIsLoadingStore(({dispatchIsLoading}) => ({dispatchIsLoading}))
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [amountOfPages, setAmountOfPages] = useState<number>(0)

	const paginationItems = []

	const handleClick = (currentPage: number) => {
		setCurrentPage(currentPage)
		const url = `${currentURL}&page=${currentPage}`
		fetchUsers(url, dispatchUsers, dispatchIsLoading, dispatchUsersAmount)
	}

	useEffect(() => {
		const amountOfPagesOverall = usersAmount/countUsersPerPage
		const amountOfPages = amountOfPagesOverall > 10 ? 10 : amountOfPagesOverall
		setAmountOfPages(amountOfPages)
	},[usersAmount])

	for (let i = 1; i <= amountOfPages; i++) {
		paginationItems.push(
			<Pagination.Item key={createId()} onClick={() => handleClick(i)} active={i === currentPage}>
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