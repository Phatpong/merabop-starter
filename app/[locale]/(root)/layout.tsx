import { BottomNavigationBar } from "@/components/navigations/bottom-navigation-bar";
import { TopNavigationBar } from "@/components/navigations/top-navigation";
import { SheetProvider } from "@/components/providers/sheet-provider";
import { ToasterProvider } from "@/components/providers/toast-provider";
import { Logo } from "@/components/sites/logo";
import { LocaleSwitcher } from "@/components/switchers/locale-switcher";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";
import { ThemeSwitcherTop } from "@/components/switchers/theme-switchertop";
import { UserButton } from "@clerk/nextjs";
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
		<html lang={locale}>
			<body>
				<div className="flex flex-col">
					<TopNavigationBar
						left={<Logo />}
						right={
							<>
								<LocaleSwitcher />
								<ThemeSwitcherTop />
								<UserButton afterSignOutUrl="/" />
							</>
						}
					/>

					<section className="flex flex-row">
						{/* LEFT NAVIGATION BAR */}

						<div className="flex flex-1 flex-col items-center bg-background min-h-screen">
							<ToasterProvider />
							<SheetProvider />
							{children}
						</div>

						{/* RIGHT NAVIGATION BAR */}
					</section>

					<BottomNavigationBar
						left={<Logo />}
						right={<ThemeSwitcher />}
					/>
				</div>
			</body>
		</html>
	);
}
