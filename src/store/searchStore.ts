import {create} from "zustand";

type SearchStore = {
	inputValue: string,
	dispatchInputValue: (isMainPage: string) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
	inputValue: '',
	dispatchInputValue: (inputValue: string) =>
		set((state) => ({
			...state,
			inputValue
		})),
}))