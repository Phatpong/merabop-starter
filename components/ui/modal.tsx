"use client";

import { HTMLAttributes } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type ModalProps = HTMLAttributes<"dialog"> & {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
};

const Modal = ({ title, description, isOpen, onClose, children, className, ...props }: ModalProps) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	);
};

export { Modal };
