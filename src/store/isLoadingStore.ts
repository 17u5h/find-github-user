import {create} from "zustand";

type IsLoadingStore = {
	isLoading: boolean
	dispatchIsLoading: (isLoading: boolean) => void
}

export const useIsLoadingStore = create<IsLoadingStore>((set) => ({
	isLoading: false,
	dispatchIsLoading: (isLoading: boolean) =>
		set((state) => ({
			...state,
			isLoading
		})),
}))