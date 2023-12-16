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
	first_name: z.string(),
	last_name: z.string(),
	username: z.string(),
	email: z.string().email(),
	phone_number: z.string(),
	address: z.array(
		z.object({
			address_type: z.string(),
			address_name: z.string(),
			sub_district: z.string(),
			district: z.string(),
			province: z.string(),
			zipcode: z.string(),
			country: z.string(),
		})
	),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export {
	//  SCHEMA
	userFormSchema,
	userQuerySchema,
};

export type { UserFormSchema, UserQuerySchema };
