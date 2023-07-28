import axios from "axios";
import {User} from "../types/UserType";

export const fetchUsers = async (url: string, dispatchUsers: (users: User[]) => void) => {
	try {
		const {data} = await axios.get(url)
		const users = data.items
		dispatchUsers(users)
	} catch (e) {
		console.error(e)
	}
}