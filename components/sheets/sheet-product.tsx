"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ReactNode } from "react";

type SheetProductProps = {
	children?: ReactNode;
	className?: string;
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
};

const SheetProduct = ({ title, description, isOpen, onClose, children, className, ...props }: SheetProductProps) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Sheet
			open={isOpen}
			onOpenChange={onChange}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
					<SheetDescription>{description}</SheetDescription>
				</SheetHeader>
				<div>{children}</div>
			</SheetContent>
		</Sheet>
	);
};

export { SheetProduct };
