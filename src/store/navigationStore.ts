import {create} from "zustand";

type NavigationStore = {
	isMainPage: boolean,
	dispatchIsMainPage: (isMainPage: boolean) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
	isMainPage: true,
	dispatchIsMainPage: (isMainPage: boolean) =>
		set((state) => ({
			...state,
			isMainPage
		})),
}))