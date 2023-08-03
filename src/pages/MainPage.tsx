import React, {useRef} from 'react';
import Header from "../components/Header";
import CardList from '../components/MainPageBody';

type Props = {
	isMainPage:boolean
}

const MainPage = ({isMainPage}: Props) => {
	const searchRef = useRef<HTMLInputElement>(null)

	const focusInput = () => {
		searchRef.current?.focus()
	}

	return (
		<>
			<Header ref={searchRef} isMainPage={isMainPage}/>
			<CardList onClick={focusInput}/>
		</>
	);
};

export default MainPage;