import React from 'react';
import * as S from '../styles/commonStyles'
import Header from "../components/Header";
import Body from '../components/Body';

const MainPage = () => {
	return (
		<>
			<Header/>
			<S.Wrapper>
				<S.Container>
					<Body/>
				</S.Container>
			</S.Wrapper>
		</>
	);
};

export default MainPage;