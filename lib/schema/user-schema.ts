import { z } from "zod";

const userQuerySchema = z.object({
	id: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	username: z.string(),
	email: z.string().email(),
	phone_number: z.string(),
});

type UserQuerySchema = z.infer<typeof userQuerySchema>;

const userFormSchema = z.object({
	// TODO :: CHANGE MIN TO REQUIRE
	first_name: z.string(),
	last_name: z.string(),
	username: z.string(),
	email: z.string().email(),
	phone_number: z.string(),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export {
	//  SCHEMA
	userFormSchema,
	userQuerySchema,
};

export type { UserFormSchema, UserQuerySchema };
