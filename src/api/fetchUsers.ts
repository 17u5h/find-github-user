import axios from "axios";
import {User} from "../types/UserType";

export const fetchUsers = async (url: string, dispatchUsers: (users: User[]) => void, dispatchIsLoading: (isLoading: boolean) => void, dispatchUsersAmount: (amount: number) => void) => {
	try {
		dispatchIsLoading(true)
		const {data} = await axios.get(url)
		const users = data.items
		const usersAmount = data.total_count
		dispatchUsersAmount(usersAmount)
		dispatchUsers(users)
	} catch {
		console.error('data not received')
	} finally {
		dispatchIsLoading(false)
	}
}