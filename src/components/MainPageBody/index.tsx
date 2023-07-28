import React from 'react';
import {useUsersStore} from "../../store/usersStore";
import Card from "./Card";
import * as S from "../../styles/mainPageStyles";
import PaginationComponent from "../ui/pagination";

const CardList = () => {
	const {users} = useUsersStore(({users}) => ({users}))

	return (
		<S.Wrapper>
			<S.CardListContainer>
				{users.map(el => (<Card key={el.id} user={el}/>))}
			</S.CardListContainer>
			{users.length > 0 && <PaginationComponent />}
		</S.Wrapper>
	);
};

export default CardList;