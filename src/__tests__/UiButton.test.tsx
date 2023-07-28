import UiButton from '../components/ui/UiButton'
import {fireEvent, render, screen} from "@testing-library/react";

describe("<UiButton />", () => {
	it('should successfully and match snapshot', () => {
		const cb = jest.fn()
		const {container} = render(<UiButton onClick={cb}>Click Me</UiButton>)

		expect(container).toMatchSnapshot()
	})
})

describe('Callback tests', () => {
	it('should call "onClick" prop', () => {
		const cb = jest.fn()
		render (<UiButton onClick={cb} >Click Me</UiButton>)
		fireEvent.click(screen.getByRole('button'))

		expect(cb).toBeCalledTimes(1)
	})
})