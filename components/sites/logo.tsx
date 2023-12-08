import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site-config";

type LogoProps = {};

const Logo = ({}: LogoProps) => {
	return (
		<Link href="/">
			<div className="hidden md:flex items-center gap-x-2 transition hover:opacity-75">
				<Image
					src="/logo.svg"
					alt="logo"
					height={28}
					width={28}
				/>
				<p className="text-lg text-primary pb-1">{siteConfig.name}</p>
			</div>
		</Link>
	);
};

export { Logo };
