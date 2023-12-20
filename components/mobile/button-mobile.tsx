import { HomeIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomeButton = () => {
	return (
		<div>
			<Link href={"/"}>
				<Button
					variant="ghost"
					className="text-gray-400">
					<HomeIcon />
				</Button>
			</Link>
		</div>
	);
};

export { HomeButton };
