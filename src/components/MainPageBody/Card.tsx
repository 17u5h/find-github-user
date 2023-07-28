import React from 'react';
import * as S from "../../styles/mainPageStyles";
import {useNavigate} from "react-router-dom";
import {User} from "../../types/UserType";
import {useUsersStore} from "../../store/usersStore";
import {useNavigationStore} from "../../store/navigationStore";

type Props = {
	user: User
}

const Card = ({user}: Props) => {
	const navigate = useNavigate()
	const {dispatchAboutUser} = useUsersStore(({dispatchAboutUser}) => ({dispatchAboutUser}))
	const {dispatchIsMainPage} = useNavigationStore(({dispatchIsMainPage}) => ({dispatchIsMainPage}))


	const goToAboutUser = () => {
		navigate('/about-user')
		dispatchAboutUser(user)
		dispatchIsMainPage(false)
	}

	return (
		<S.CardContainer onClick={goToAboutUser}>
			<S.CardImage $avatar_url={user.avatar_url}/>
			<S.UserName>{user.login}</S.UserName>
		</S.CardContainer>
	);
};

export default Card;