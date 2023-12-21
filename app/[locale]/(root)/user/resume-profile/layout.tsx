import { notFound } from "next/navigation";
import { type ReactNode } from "react";

import { CardNavigation } from "@/components/custom/card-leftnavigation";
import { CardResume } from "@/components/custom/card-resume";

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
				<CardNavigation />
				<CardResume />
				<div className="flex flex-1 items-center justify-center">{children}</div>
			</div>
		</div>
	);
}
