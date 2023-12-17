import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type TypographyH1Props = ComponentPropsWithoutRef<"h1"> & {
	children?: ReactNode;
};
const TypographyH1 = ({ children, className }: TypographyH1Props) => {
	return <h1 className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>;
};

type TypographyH2Props = ComponentPropsWithoutRef<"h2"> & {
	children?: ReactNode;
};
const TypographyH2 = ({ children, className }: TypographyH2Props) => {
	return <h2 className={cn("text-3xl font-semibold tracking-tight", className)}>{children}</h2>;
};

type TypographyH3Props = ComponentPropsWithoutRef<"h3"> & {
	children?: ReactNode;
};
const TypographyH3 = ({ children, className }: TypographyH3Props) => {
	return <h3 className={cn("text-2xl font-semibold tracking-tight", className)}>{children}</h3>;
};

type TypographyH4Props = ComponentPropsWithoutRef<"h4"> & {
	children?: ReactNode;
};
const TypographyH4 = ({ children, className }: TypographyH4Props) => {
	return <h4 className={cn("text-xl font-semibold tracking-tight", className)}>{children}</h4>;
};

type TypographyPProps = ComponentPropsWithoutRef<"p"> & {
	children?: ReactNode;
};
const TypographyP = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-base font-medium tracking-tight", className)}>{children}</p>;
};
const TypographySmall = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-sm font-medium tracking-tight", className)}>{children}</p>;
};
const TypographyLarge = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-lg font-semibold tracking-tight", className)}>{children}</p>;
};

const TypographyMuted = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-base font-medium tracking-tight text-muted-foreground", className)}>{children}</p>;
};

const TypographyMutedSM = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-sm font-medium tracking-tight text-muted-foreground", className)}>{children}</p>;
};

const TypographyMutedXS = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-xs font-medium tracking-tight text-muted-foreground", className)}>{children}</p>;
};

const TypographyLead = ({ children, className }: TypographyPProps) => {
	return <p className={cn("text-xl font-medium tracking-tight text-muted-foreground", className)}>{children}</p>;
};

type TypographyBlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
	children?: ReactNode;
};
const TypographyBlockquote = ({ children, className }: TypographyBlockquoteProps) => {
	return <blockquote className={cn("text-base font-medium tracking-tight", className)}>{children}</blockquote>;
};

type TypographyInlineCodeProps = ComponentPropsWithoutRef<"code"> & {
	children?: ReactNode;
};
const TypographyInlineCode = ({ children, className }: TypographyInlineCodeProps) => {
	return <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>{children}</code>;
};

type TypographyDescriptionTitle = ComponentPropsWithoutRef<"dt"> & {
	children?: ReactNode;
};
// DESCRIPTION LISTS
const TypographyDescriptionTitle = ({ children, className }: TypographyDescriptionTitle) => {
	return <dt className={cn("text-sm font-medium leading-6", className)}>{children}</dt>;
};

type TypographyDescriptionData = ComponentPropsWithoutRef<"dt"> & {
	children?: ReactNode;
};
const TypographyDescriptionData = ({ children, className }: TypographyDescriptionData) => {
	return <dd className={cn("mt-1 text-sm leading-6 text-muted-foreground sm:col-span-2 sm:mt-0", className)}>{children}</dd>;
};

export {
	TypographyBlockquote,
	TypographyDescriptionData,
	TypographyDescriptionTitle,
	// COMPONENT
	TypographyH1,
	TypographyH2,
	TypographyH3,
	TypographyH4,
	TypographyInlineCode,
	TypographyLarge,
	TypographyLead,
	TypographyMuted,
	TypographyMutedSM,
	TypographyMutedXS,
	TypographyP,
	TypographySmall,
};
