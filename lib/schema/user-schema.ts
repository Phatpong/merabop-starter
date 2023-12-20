import { z } from "zod";

const userIdentityQuerySchema = z.object({
	id: z.string(),
	identity_card_number: z.string(),
});

type UserIdentityQuerySchema = z.infer<typeof userIdentityQuerySchema>;

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
			user_id: z.string(),
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

const userIdentityFormSchema = z.object({
	identity_card_number: z.string(),
});
type UserIdentityFormSchema = z.infer<typeof userIdentityFormSchema>;

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
			user_id: z.string(),
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
	userIdentityFormSchema,
	userIdentityQuerySchema,
	userQuerySchema,
};

export type { UserAddressFormSchema, UserAddressQuerySchema, UserFormSchema, UserIdentityFormSchema, UserIdentityQuerySchema, UserQuerySchema };
