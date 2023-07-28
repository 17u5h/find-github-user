import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import AboutUserPage from "../pages/AboutUserPage";

const AppRoutes = () => {

	return (
		<Routes>
			<Route path="/" element={<MainPage isMainPage={true}/>}/>
			<Route path="/about-user" element={<AboutUserPage isMainPage={false}/>}/>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	);
};

export default AppRoutes;