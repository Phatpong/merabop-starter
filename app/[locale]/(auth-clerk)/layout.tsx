import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

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
			<body>{children}</body>
		</div>
	);
}
