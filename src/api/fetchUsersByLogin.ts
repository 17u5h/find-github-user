import axios from "axios";
import {API_URL} from "./const/API_URL";
import {User} from "../types/UserType";

export const fetchUsersByLogin = async (inputValue: string, dispatchUsers: (users: User[]) => void) => {
	try {
		const {data} = await axios.get(`${API_URL}?q=${inputValue}`)
		dispatchUsers(data.items)

	} catch (e) {
		console.error(e)
	}
}