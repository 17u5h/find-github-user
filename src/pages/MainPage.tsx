import React from 'react';
import Header from "../components/Header";
import CardList from '../components/MainPageBody';

type Props = {
	isMainPage:boolean
}

const MainPage = ({isMainPage}: Props) => {
	return (
		<>
			<Header isMainPage={isMainPage}/>
			<CardList/>
		</>
	);
};

export default MainPage;