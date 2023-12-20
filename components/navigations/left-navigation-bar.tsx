import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
	{ name: "Profile", href: "#", icon: HomeIcon, current: true },
	{ name: "Edit Resume", href: "#", icon: UsersIcon, current: false },
	{ name: "Privcary Settings", href: "#", icon: FolderIcon, current: false },
	{ name: "Account Settings", href: "#", icon: CalendarIcon, count: "20+", current: false },
	//
];

type LeftNavigationBarProps = React.HTMLAttributes<HTMLElement> & {
	left?: React.ReactNode;
	right?: React.ReactNode;
	varaint?: "default" | "marketing" | "mobile";
};

const LeftNavigationBar = ({ left, right, className }: LeftNavigationBarProps) => {
	return (
		<main className={cn("hidden md:block 0 border-r bg-purple-100", className)}>
			<div>
				{/* LEFT */}
				<div className="flex flex-col gap-y-7 ">{left ? left : <Placeholder placeholder="Logo" />}</div>

				{/* RIGHT */}
			</div>
		</main>
	);
};

const Placeholder = ({ placeholder = "Placeholder" }: { placeholder?: string }) => {
	return <div className="bg-secondary rounded-md border-dash px-3 py-2">{placeholder}</div>;
};

export { LeftNavigationBar };
