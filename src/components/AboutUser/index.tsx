import React from 'react';
import {useUsersStore} from "../../store/usersStore";
import * as S from "../../styles/aboutUserStyles";

const AboutUser = () => {

	const {aboutUser} = useUsersStore(({aboutUser}) => ({aboutUser}))

	return (
		<S.Container>
			<S.Image $avatar_url={aboutUser?.avatar_url}/>
			<S.DescriptionContainer>
				<S.Title>Имя: {aboutUser?.login}</S.Title>
				<S.Id>id: {aboutUser?.id}</S.Id>
			</S.DescriptionContainer>
		</S.Container>
	);
};

export default AboutUser;