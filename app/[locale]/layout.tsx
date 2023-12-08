import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

// Can be imported from a shared config
const locales = ["en", "th"];

type LocaleLayoutProps = {
	children: ReactNode;
	params: {
		locale: string;
	};
};

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
	const messages = useMessages();
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return (
		<ClerkProvider>
			<html lang={locale}>
				<body>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<NextIntlClientProvider
							locale={locale}
							messages={messages}>
							{children}
						</NextIntlClientProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
