import axios from "axios";
import {User} from "../types/UserType";

export const fetchUsers = async (url: string, dispatchUsers: (users: User[]) => void, dispatchIsLoading: (isLoading: boolean) => void) => {
	try {
		dispatchIsLoading(true)
		const {data} = await axios.get(url)
		const users = data.items
		dispatchUsers(users)
	} catch {
		console.error('data not received')
	} finally {
		dispatchIsLoading(false)
	}
}