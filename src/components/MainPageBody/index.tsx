import React, {useEffect, useState} from 'react';
import {useUsersStore} from "../../store/usersStore";
import Card from "./Card";
import * as S from "../../styles/mainPageStyles";
import PaginationComponent from "../ui/PaginationComponent";
import {useIsLoadingStore} from "../../store/isLoadingStore";
import Loading from "../ui/Loading";

const CardList = () => {
	const {users} = useUsersStore(({users}) => ({users}))
	const {isLoading} = useIsLoadingStore(({isLoading}) => ({isLoading}))
	const [isPlaceholder, setIsPlaceholder]  = useState<boolean>(true)

	useEffect(() => {
		users.length <= 0 ? setIsPlaceholder(true) : setIsPlaceholder(false)
	},[users])

	return (
		<S.Wrapper>
			{isPlaceholder ? <S.MainPagePlaceholder>Пользователи github'a</S.MainPagePlaceholder> :
			isLoading ? <Loading/> : <S.CardListContainer>
				{users.map(el => (<Card key={el.id} user={el}/>))}
			</S.CardListContainer>}
			{users.length > 0 && <PaginationComponent/>}
		</S.Wrapper>
	);
};

export default CardList;