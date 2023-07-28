import React from 'react';
import Header from "../components/Header";
import AboutUser from "../components/AboutUser";

type Props = {
	isMainPage:boolean
}

const AboutUserPage = ({isMainPage}: Props) => {
	return (
		<>
			<Header isMainPage={isMainPage}/>
			<AboutUser/>
		</>
	);
};

export default AboutUserPage;