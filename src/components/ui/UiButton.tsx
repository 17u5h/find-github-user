import React from 'react'
import * as S from '../../styles/uiStyles'

type Props = {
	onClick: () => void
	children: string
	disabled?: boolean
}

const UiButton = ({ onClick, children, disabled}: Props) => {

	return (
		<S.UiButton onClick={onClick} disabled={disabled}>
			{children}
		</S.UiButton>
	)
}

export default UiButton
