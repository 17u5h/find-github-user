import React from 'react';
import * as S from "../../styles/uiStyles";
import {Spinner} from "react-bootstrap";

const Loading = () => {
	return (
		<S.LoadingContainer>
			<Spinner/>
		</S.LoadingContainer>
	);
};

export default Loading;