import axios from "axios";
import {API_URL} from "./const/API_URL";

export const fetchUserByLogin = async () => {
	try {
		const {data} = await axios.get(`${API_URL}?q=17u5h`)
		console.log(data)
	} catch (e) {
		console.error(e)
	}
}