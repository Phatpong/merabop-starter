"use client";

import { useEffect, useState } from "react";

export const SheetProvider = () => {
	const [isMouted, setIsMouted] = useState(false);

	useEffect(() => {
		setIsMouted(true);
	}, []);

	if (!isMouted) {
		return null;
	}

	return <>{/* <StoreSheet /> */}</>;
};
