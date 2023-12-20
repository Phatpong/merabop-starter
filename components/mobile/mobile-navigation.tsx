import { cn } from "@/lib/utils";

type BottomNavigationBarProps = React.HTMLAttributes<HTMLElement> & {
	left?: React.ReactNode;
	right?: React.ReactNode;
	center?: React.ReactNode;
	varaint?: "default" | "marketing" | "mobile";
};

const MobileNavigation = ({ left, right, center, className }: BottomNavigationBarProps) => {
	return (
		<footer className={cn("md:hidden fixed bottom-0 z-10 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ", className)}>
			<div className="flex flex-row items-center justify-between px-4 h-14 ">
				{/* LEFT */}
				<div className="flex">{left ? left : <Placeholder placeholder="Logo" />}</div>

				{/* CENTER */}
				<div className="flex flex-1 items-center justify-center">{center ? center : <Placeholder placeholder="Navigation" />}</div>

				{/* RIGHT */}
				<div className="flex items-center gap-2 ">{right ? right : <Placeholder placeholder="Button" />}</div>
			</div>
		</footer>
	);
};

const Placeholder = ({ placeholder = "Placeholder" }: { placeholder?: string }) => {
	return <div className="bg-secondary rounded-md border-dash px-3 py-2">{placeholder}</div>;
};

export { MobileNavigation };
