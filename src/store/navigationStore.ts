import {create} from "zustand";

type NavigationStore = {
	currentURL: string
	dispatchCurrentURL: (currentURL: string) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
	currentURL: '',
	dispatchCurrentURL: (currentURL: string) =>
		set((state) => ({
			...state,
			currentURL
		})),
}))