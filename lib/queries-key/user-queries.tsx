import axios from "axios";

import { UserAddressFormSchema, UserAddressQuerySchema, UserQuerySchema, type UserFormSchema } from "@/lib/schema/user-schema";

const userQueryKeys = {
	all: ["users"] as const,
	lists: () => [...userQueryKeys.all, "list"] as const,
	list: (filter: string) => [...userQueryKeys.lists(), { filter }] as const,
	details: () => [...userQueryKeys.all, "details"] as const,
	detail: (id: string | number) => [...userQueryKeys.details(), id] as const,
};

const userApiEndpoint = "/api/users";

const userQueryFn = {
	createUser: async (data: UserFormSchema) => {
		const response = await axios.post(userApiEndpoint, data);
		return response.data as UserQuerySchema;
	},
};

const userAddressQueryFn = {
	createUserAdress: async (data: UserAddressFormSchema) => {
		const response = await axios.post(`/api/users/addresses`, data);
		return response.data as UserAddressQuerySchema;
	},
};

export { userAddressQueryFn, userQueryFn, userQueryKeys };
