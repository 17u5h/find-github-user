import React from 'react';
import * as S from '../../styles/headerStyles'
import UiButton from "../ui/UiButton";

const Search = () => {
	return (
		<S.SearchBlock>
			<S.SearchField placeholder='Поиск по логину...'></S.SearchField>
			<UiButton onClick={() => console.log('click search')}>
				Искать
			</UiButton>
		</S.SearchBlock>
	);
};

export default Search;