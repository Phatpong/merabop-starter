import { z } from "zod";

const userAddressQuerySchema = z.object({
	addresses: z.array(
		z.object({
			first_name: z.string(),
			last_name: z.string(),
			address_type: z.string(),
			address_name: z.string(),
			sub_district: z.string(),
			district: z.string(),
			province: z.string(),
			country: z.string(),
			zipcode: z.string(),
		})
	),
});

type UserAddressQuerySchema = z.infer<typeof userAddressQuerySchema>;

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
});

type UserFormSchema = z.infer<typeof userFormSchema>;

const userAddressFormSchema = z.object({
	addresses: z.array(
		z.object({
			first_name: z.string(),
			last_name: z.string(),
			address_type: z.string(),
			address_name: z.string(),
			sub_district: z.string(),
			district: z.string(),
			province: z.string(),
			country: z.string(),
			zipcode: z.string(),
		})
	),
});

// const userAddressFormSchema = z.array(
// 	z.object({
// 		first_name: z.string(),
// 		last_name: z.string(),
// 		address_type: z.string(),
// 		address_name: z.string(),
// 		sub_district: z.string(),
// 		district: z.string(),
// 		province: z.string(),
// 		country: z.string(),
// 		zipcode: z.string(),
// 	})
// );

type UserAddressFormSchema = z.infer<typeof userAddressFormSchema>;

export {
	//  SCHEMA
	userAddressFormSchema,
	userAddressQuerySchema,
	userFormSchema,
	userQuerySchema,
};

export type { UserAddressFormSchema, UserAddressQuerySchema, UserFormSchema, UserQuerySchema };
