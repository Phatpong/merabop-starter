import { useTranslations } from "next-intl";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

import { TypographyP } from "@/components/typographies/typography";
import { CardFooter } from "@/components/ui/card";

type CardActionProps = HTMLAttributes<"card"> & {
	href: string;
	detailAction: string;
	children: ReactNode;
};

const CardAction = ({ href, detailAction, children }: CardActionProps) => {
	const $t = useTranslations();
	return (
		<CardFooter className="flex justify-between items-center border-t p-4">
			<div className="flex space-x-1">
				<TypographyP>{$t("learn more about")}</TypographyP>
				<Link
					href={href}
					className="hover:underline text-primary">
					{detailAction}
				</Link>
			</div>
			<div>{children}</div>
		</CardFooter>
	);
};

export { CardAction };
