import axios from "axios";
import {API_URL} from "./const/API_URL";
import {User} from "../types/UserType";

export const fetchSortByRepositoriesCount = async (inputValue: string, dispatchUsers: (users: User[]) => void, isMaxToMin: boolean) => {
	try {
		const orderValue = isMaxToMin ? 'desc' : 'asc'
		const {data} = await axios.get(`${API_URL}?q=${inputValue}&sort=repositories&order=${orderValue}`)
		const users = data.items
		dispatchUsers(users)
	} catch (e) {
		console.error(e)
	}
}