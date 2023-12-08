"use client";

import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { locales, usePathname, useRouter } from "@/lib/navigation";

type LocaleSwitcherProps = {};

const LocaleSwitcher = ({}: LocaleSwitcherProps) => {
	const $t = useTranslations();
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon">
					<LanguagesIcon className="h-4 w-4" />
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center">
				{locales.map((language) => (
					<DropdownMenuItem
						key={language}
						disabled={language === locale}
						onClick={() => router.push(pathname, { locale: language })}>
						{$t(language)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { LocaleSwitcher };
