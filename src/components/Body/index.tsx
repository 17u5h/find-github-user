import React, {useEffect} from 'react';
import {fetchUserByLogin} from "../../api/fetchUserByLogin";

const Body = () => {
	useEffect(() => {
		fetchUserByLogin()
	},[])
	return (
		<div>

		</div>
	);
};

export default Body;