import {createId} from "../lib/createId";

describe('output data of createId function', () => {
	it('return a id', () => {

		const expected = 5000

		const mockMath = Object.create(global.Math)
		mockMath.random = () => 0.5
		global.Math = mockMath

		const id = createId()

		expect(id).toEqual(expected)
	})
})