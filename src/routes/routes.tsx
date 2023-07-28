import React from 'react';
import {Route, Routes} from "react-router-dom";

import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import AboutUserPage from "../pages/AboutUserPage";


const AppRoutes = () => {

	return (
		<Routes>
			<Route path="/" element={<MainPage/>}></Route>
			<Route path="/about-user" element={<AboutUserPage/>}/>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	);
};

export default AppRoutes;