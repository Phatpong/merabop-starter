import { create } from "zustand";

type useStoreSheetProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const useStoreSheet = create<useStoreSheetProps>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
