import {create} from "zustand";
import {User} from "../types/UserType";

type UsersStore = {
	users: User[]
	dispatchUsers: (users: User[]) => void
	aboutUser: User | null
	dispatchAboutUser: (user: User) => void
	usersAmount: number
	dispatchUsersAmount: (usersAmount: number) => void
}

export const useUsersStore = create<UsersStore>((set) => ({
	users: [],
	dispatchUsers: (users: User[]) =>
		set((state) => ({
			...state,
			users
		})),
	aboutUser: null,
	dispatchAboutUser: (aboutUser: User | null) =>
		set((state) => ({
			...state,
			aboutUser
		})),
	usersAmount: 0,
	dispatchUsersAmount: (usersAmount: number) =>
		set((state) => ({
			...state,
			usersAmount
		})),
}))