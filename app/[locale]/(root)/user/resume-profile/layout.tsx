import { CardResume } from "@/components/custom/card-resume";
import { LeftNavigationBar } from "@/components/navigations/left-navigation-bar";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

// Can be imported from a shared config
const locales = ["en", "th"];

type LocaleLayout = {
	children: ReactNode;
	params: {
		locale: string;
	};
};

export default function LocaleLayout({ children, params: { locale } }: LocaleLayout) {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return (
		<div lang={locale}>
			<div className="flex">
				<LeftNavigationBar
					left={
						<>
							<Button
								className="w-full"
								variant="ghost">
								<HomeIcon />
								Profile
							</Button>
							<Button
								className="w-full"
								variant="ghost">
								<HomeIcon />
								Edit Resume
							</Button>
							<Button
								className="w-full"
								variant="ghost">
								<HomeIcon />
								Privacy Settings
							</Button>
							<Button
								className="w-full"
								variant="ghost">
								<HomeIcon />
								Account Settings
							</Button>
						</>
					}
				/>
				<CardResume />
				<div className="flex flex-1 items-center justify-center">{children}</div>
			</div>
		</div>
	);
}
