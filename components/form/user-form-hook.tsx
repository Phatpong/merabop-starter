"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { CardAction } from "@/components/custom/card-action";
import { ComboboxAddressType } from "@/components/custom/combobox-address-type";
import { ComboboxCountry } from "@/components/custom/combobox-country";
import { TypographyH4, TypographyP } from "@/components/typographies/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userAddressQueryFn } from "@/lib/queries-key/user-queries";
import { UserAddressFormSchema, userAddressFormSchema } from "@/lib/schema/user-schema";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

const UserFormHook = () => {
	const params = useParams<{ id: string }>();
	const $t = useTranslations();

	const defaultValues: Partial<UserAddressFormSchema> = {};

	const form = useForm<UserAddressFormSchema>({
		resolver: zodResolver(userAddressFormSchema),
		defaultValues,
		mode: "onChange",
	});

	const { fields, append, remove } = useFieldArray({
		name: "addresses",
		control: form.control,
	});

	const createUserAddress = useMutation({
		mutationFn: async (data: UserAddressFormSchema) => userAddressQueryFn.createUserAdress(data),

		onError: (error) => {
			toast.error("failed to created userAddress");
			console.log(error);
		},

		onSuccess: (response) => {
			form.reset();
			toast.success("success to created userAddress");
			console.log(response);
		},
	});

	const onSubmit = async (data: UserAddressFormSchema) => {
		createUserAddress.mutate(data);
		console.log(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-6 px-2 py-4 w-full h-full">
				<Card>
					<CardHeader>{$t("personal address")}</CardHeader>

					<CardContent>
						{fields.map((field, fieldIndex) => (
							<Card
								key={`${fieldIndex} - ${field.id}`}
								className="mt-4">
								<CardHeader>
									<div className="flex">
										<TypographyP className="flex flex-1">
											{$t("address -")} {fieldIndex + 1}
										</TypographyP>
										<Button
											size="icon"
											type="button"
											variant="ghost"
											onClick={() => remove(fieldIndex)}>
											<TypographyH4>x</TypographyH4>
										</Button>
									</div>
								</CardHeader>

								<CardContent className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.first_name`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("first name")}</FormLabel>
												<FormControl>
													<Input
														placeholder="Phat..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.last_name`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("last name")}</FormLabel>
												<FormControl>
													<Input
														placeholder="Mettaprasert..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.address_type`}
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<ComboboxAddressType
														form={form}
														formLabel={$t("address type")}
														fieldName={field.name}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.address_name`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("address name")}</FormLabel>
												<FormControl>
													<Input
														placeholder="chemmin working..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.country`}
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<ComboboxCountry
														form={form}
														formLabel={$t("country")}
														fieldName={field.name}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.sub_district`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("sub district")}</FormLabel>
												<FormControl>
													<Input
														placeholder="sub district..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.district`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("district")}</FormLabel>
												<FormControl>
													<Input
														placeholder="district..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.province`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("province")}</FormLabel>
												<FormControl>
													<Input
														placeholder="province..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`addresses.${fieldIndex}.zipcode`}
										render={({ field }) => (
											<FormItem>
												<FormLabel className={cn(fieldIndex !== 0)}>{$t("zipcode")}</FormLabel>
												<FormControl>
													<Input
														placeholder="zipcode..."
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</CardContent>
							</Card>
						))}
					</CardContent>
					{/* DETAILS - FOOTER */}
					<CardAction
						href="#"
						detailAction={$t("user personal address")}>
						<Button
							type="button"
							variant="outline"
							onClick={() => append({ first_name: "", last_name: "", address_name: "", address_type: "", country: "", province: "", sub_district: "", district: "", zipcode: "", user_id: params.id })}>
							Add more Details
						</Button>
						<Button>Submit</Button>
					</CardAction>
				</Card>
			</form>
		</Form>
	);
};

export { UserFormHook };
