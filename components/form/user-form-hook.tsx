"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userQueryFn } from "@/lib/queries-key/user-queries";
import { userFormSchema, type UserFormSchema } from "@/lib/schema/user-schema";
import { cn } from "@/lib/utils";

const UserFormHook = () => {
	const $t = useTranslations();

	const defaultValues: Partial<UserFormSchema> = {
		first_name: "Phat",
		last_name: "Mettaprasert",
		email: "",
		username: "",
		phone_number: "",
		address: [
			{
				address_name: "",
				address_type: "",
				country: "",
				district: "",
				province: "",
				sub_district: "",
				zipcode: "",
			},
		],
	};

	const form = useForm<UserFormSchema>({
		resolver: zodResolver(userFormSchema),
		defaultValues,
		mode: "onChange",
	});

	const { fields, append, remove } = useFieldArray({
		name: "address",
		control: form.control,
	});

	const createUser = useMutation({
		mutationFn: async (data: UserFormSchema) => userQueryFn.createUser(data),

		onError: (error) => {
			toast.error("failed to created userr");
			console.log(error);
		},

		onSuccess: (response) => {
			form.reset();
			toast.success("success to created user");
			console.log(response);
		},
	});

	const onSubmit = async (data: UserFormSchema) => {
		console.log(data);
		createUser.mutate(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-6 px-2 py-4 w-full">
				<div className="flex justify-between space-x-4">
					{/* FIRST NAME */}
					<FormField
						control={form.control}
						name="first_name"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>{$t("first name")}</FormLabel>
								<FormControl>
									<Input
										placeholder="First name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* LAST NAME */}
					<FormField
						control={form.control}
						name="last_name"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>{$t("last name")}</FormLabel>
								<FormControl>
									<Input
										placeholder="Last name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* USERNAME */}
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{$t("Username")}</FormLabel>
							<FormControl>
								<Input
									placeholder="example1998"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* EMAIL */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{"Email"}</FormLabel>
							<FormControl>
								<Input
									placeholder="example@email.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* PHONE NUMBER */}
				<FormField
					control={form.control}
					name="phone_number"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{$t("phone_number")}</FormLabel>
							<FormControl>
								<Input
									placeholder="08x-xxxxxxx"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div>
					{fields.map((field, fieldIndex) => (
						<div key={`${fieldIndex} - ${field.id}`}>
							<FormField
								control={form.control}
								name={`address.${fieldIndex}.address_name`}
								render={({ field }) => (
									<FormItem>
										<FormLabel className={cn(fieldIndex !== 0 && "sr-only")}>{$t("address_name")}</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Address_name"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`address.${fieldIndex}.address_type`}
								render={({ field }) => (
									<FormItem>
										<FormLabel className={cn(fieldIndex !== 0 && "sr-only")}>{$t("address_type")}</FormLabel>

										<FormControl>
											<Input
												{...field}
												placeholder="Address_type"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					))}
					<Button
						type="button"
						variant="outline"
						size="sm"
						className="mt-2"
						onClick={() => append({ address_name: "", address_type: "", country: "", district: "", province: "", sub_district: "", zipcode: "" })}>
						Add more Details
					</Button>
					<Button
						type="button"
						variant="outline"
						size="sm"
						className="mt-2"
						onClick={() => remove()}>
						Delete details
					</Button>
				</div>
				<Button>Submit</Button>
			</form>
		</Form>
	);
};

export { UserFormHook };
