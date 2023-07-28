import {create} from "zustand";

type NavigationStore = {
	isMainPage: boolean
	dispatchIsMainPage: (isMainPage: boolean) => void
	currentURL: string
	dispatchCurrentURL: (currentURL: string) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
	isMainPage: true,
	dispatchIsMainPage: (isMainPage: boolean) =>
		set((state) => ({
			...state,
			isMainPage
		})),
	currentURL: '',
	dispatchCurrentURL: (currentURL: string) =>
		set((state) => ({
			...state,
			currentURL
		})),
}))