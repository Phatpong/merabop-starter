import { cn } from "@/lib/utils";

type TopNavigationBarProps = React.HTMLAttributes<HTMLHeadElement> & {
	left?: React.ReactNode;
	center?: React.ReactNode;
	right?: React.ReactNode;
};
const TopNavigationBar = ({ left, center, right, className }: TopNavigationBarProps) => {
	return (
		<header className={cn("fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
			<div className="flex flex-row items-center justify-between px-4 h-14">
				{/* LEFT */}
				<div className="flex">{left ? left : <Placeholder placeholder="Logo" />}</div>

				{/* CENTER */}
				<div className="flex flex-1 items-center justify-center">{center ? center : <Placeholder placeholder="Navigation" />}</div>

				{/* RIGHT */}
				<div className="flex items-center gap-2">{right ? right : <Placeholder placeholder="Button" />}</div>
			</div>
		</header>
	);
};

const Placeholder = ({ placeholder = "Placeholder" }: { placeholder?: string }) => {
	return <div className="bg-secondary rounded-md border-dash px-3 py-2">{placeholder}</div>;
};

export { TopNavigationBar };
