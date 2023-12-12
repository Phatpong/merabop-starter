"use client";

import { useStoreSheet } from "@/hooks/use-store-sheet";
import { useEffect } from "react";

type Props = {};

const HomePage = (props: Props) => {
	const sheet = useStoreSheet();

	const onOpen = useStoreSheet((state) => state.onOpen);
	const isOpen = useStoreSheet((state) => state.isOpen);

	useEffect(() => {
		if (!isOpen) {
			onOpen();
		}
	}, [isOpen, onOpen]);
	return <div>HomePage</div>;
};

export default HomePage;
