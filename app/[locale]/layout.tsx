import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode, Suspense } from "react";

import { TanStackProviders } from "@/components/providers/tanstack-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
			<html
				lang={locale}
				suppressHydrationWarning={true}>
				<Suspense fallback={null}>
					<body>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange>
							<NextIntlClientProvider
								locale={locale}
								messages={messages}>
								<div className="flex-1 flex-col items-center bg-background min-h-screen w-full px-4 py-4">
									<TanStackProviders>{children}</TanStackProviders>
								</div>
							</NextIntlClientProvider>
						</ThemeProvider>
					</body>
				</Suspense>
			</html>
		</ClerkProvider>
	);
}
