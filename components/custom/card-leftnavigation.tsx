import { Card, CardContent } from "@/components/ui/card";
import { navigationLink } from "@/config/form-config";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type NavigationLinkItemProps = ComponentPropsWithoutRef<"div"> & {
	title: string;
	icon?: LucideIcon;
	isData?: string;
	href: string;
};

const NavigationLinkItem = ({ title, icon: Icon, isData, href }: NavigationLinkItemProps) => {
	return (
		<Link
			href={href}
			className={cn("w-full flex items-center py-4")}>
			{Icon ? (
				<div className="flex flex-1 items-center gap-4">
					{Icon && <Icon className="h-8 w-8" />}
					{title}
				</div>
			) : null}
		</Link>
	);
};

type CardResumeProps = {};

const CardNavigation = ({}: CardResumeProps) => {
	return (
		<Card>
			<CardContent className="flex flex-col">
				{navigationLink.map((link, linkIndex) => (
					<NavigationLinkItem
						key={`${link.name} - ${linkIndex}`}
						href={link.href}
						title={link.name}
						icon={link.icon}
					/>
				))}
			</CardContent>
		</Card>
	);
};
export { CardNavigation };
