import React from 'react';
import * as S from '../styles/commonStyles'
import Header from "../components/Header";
import CardList from '../components/MainPageBody';

const MainPage = () => {
	return (
		<>
			<Header/>
			<S.Wrapper>
					<CardList/>
			</S.Wrapper>
		</>
	);
};

export default MainPage;