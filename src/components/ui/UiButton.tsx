import React from 'react'
import * as S from '../../styles/uiStyles'

type Props = {
	onClick: () => void
	children: string
}

const UiButton = ({ onClick, children}: Props) => {

	return (
		<S.UiButton onClick={onClick}>
			{children}
		</S.UiButton>
	)
}

export default UiButton
