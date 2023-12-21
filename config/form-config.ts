import { AwardIcon, Briefcase, GlobeIcon, GraduationCapIcon, LockKeyholeIcon, PenSquareIcon, ScrollTextIcon, SettingsIcon, ShrinkIcon, UserIcon, UsersIcon } from "lucide-react";

export const formConfig = [
	{
		icon: UserIcon,
		name: "personal information",
		href: "/user/resume-profile/edit-resume/personal-information",
	},
	{
		icon: Briefcase,
		name: "user address",
		href: "/user/resume-profile/edit-resume/user-address",
	},
	{
		icon: GraduationCapIcon,
		name: "education",
		href: "#",
	},
	{
		icon: ScrollTextIcon,
		name: "work experience",
		href: "#",
	},
	{
		icon: AwardIcon,
		name: "training certificate",
		href: "#",
	},
	{
		icon: GlobeIcon,
		name: "language skills",
		href: "#",
	},
	{
		icon: ShrinkIcon,
		name: "orther skills",
		href: "#",
	},
	{
		icon: UsersIcon,
		name: "reference",
		href: "#",
	},
];

export const navigationLink = [
	{
		icon: UsersIcon,
		name: "profile",
		href: "#",
	},
	{
		icon: PenSquareIcon,
		name: "edit resume",
		href: "#",
	},
	{
		icon: LockKeyholeIcon,
		name: "privacy settings",
		href: "#",
	},
	{
		icon: SettingsIcon,
		name: "account settings",
		href: "#",
	},
];
