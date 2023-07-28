import React from 'react';
import {Route, Routes} from "react-router-dom";

import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import UserPage from "../pages/UserPage";


const AppRoutes = () => {

	return (
		<Routes>
			<Route path="/" element={<MainPage/>}></Route>
			<Route path="/user/:id" element={<UserPage/>}/>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	);
};

export default AppRoutes;