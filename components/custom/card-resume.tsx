import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formConfig } from "@/config/form-config";
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
			<div>{isData ? null : <div>Add</div>}</div>
		</Link>
	);
};

type CardResumeProps = {};

const CardResume = ({}: CardResumeProps) => {
	return (
		<Card>
			<CardHeader className="flex flex-row justify-between">
				<div className="border">Progress Circle</div>
				<div>
					<CardTitle>Your resume completeness</CardTitle>
					<CardDescription>Insufficcie data to apply</CardDescription>
				</div>
			</CardHeader>

			<CardContent className="flex flex-col">
				{formConfig.map((formLink, formLinkIndex) => (
					<NavigationLinkItem
						href={formLink.href}
						key={`${formLink.name} -${formLinkIndex}`}
						title={formLink.name}
						icon={formLink.icon}
					/>
				))}
			</CardContent>
		</Card>
	);
};
export { CardResume };
