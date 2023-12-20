import { faker } from "@faker-js/faker";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface User {
	id: number;
	name: string;
}

export const users = Array(1000)
	.fill(0)
	.map((_, i) => ({
		id: i,
		name: faker.person.fullName(),
	}));

export const fetchUsers = async (search: string) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
};
