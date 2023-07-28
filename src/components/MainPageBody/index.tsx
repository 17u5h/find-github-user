import React from 'react';
import {useUsersStore} from "../../store/usersStore";
import Card from "./Card";
import * as S from "../../styles/mainPageStyles";

const CardList = () => {
	const {users} = useUsersStore(({users}) => ({users}))

	return (
		<S.CardListContainer>
			{users.map(el => (<Card key={el.id} user={el}/>))}
		</S.CardListContainer>
	);
};

export default CardList;