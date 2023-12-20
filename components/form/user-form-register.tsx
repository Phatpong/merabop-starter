"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { TypographyP } from "@/components/typographies/typography";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userQueryFn } from "@/lib/queries-key/user-queries";
import { userFormSchema, type UserFormSchema } from "@/lib/schema/user-schema";

const UserFormRegister = () => {
	const $t = useTranslations();
	const router = useRouter();

	const form = useForm<UserFormSchema>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			username: "",
			email: "",
			phone_number: "",
		},
	});

	const createUser = useMutation({
		mutationFn: async (data: UserFormSchema) => userQueryFn.createUser(data),

		onError: (error) => {
			toast.error("failed to created user");
			console.log(error);
		},

		onSuccess: (response) => {
			// form.reset();
			// console.log(response);
			const userId = response.id;
			console.log(userId);
			toast.success("success to created user");
			router.push(`/user-address/${userId}`);
		},
	});

	const onSubmit = async (data: UserFormSchema) => {
		console.log(data);
		createUser.mutate(data);
	};
	// TODO :: RESPONSIVE MOBILE , MOBILE LIKE DESIGN
	// TODO :: JITTA MOBILE

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-6 px-2 py-4 mx-2">
				<Card className="border-none">
					<CardHeader>
						<div className="items-center">
							<CardTitle className="truncate">{$t("personal information")}</CardTitle>
							<CardDescription>
								<TypographyP className="line-clamp-2">{"organizing your customers help you create quicker qtoes and keep track of them easier"}</TypographyP>
							</CardDescription>
						</div>
					</CardHeader>
				</Card>
				{/* FIRST NAME */}
				<FormField
					control={form.control}
					name="first_name"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>{$t("first name")}</FormLabel>
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
				{/* LAST NAME */}
				<FormField
					control={form.control}
					name="last_name"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>{$t("last name")}</FormLabel>
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

				{/* USERNAME */}
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{$t("username")}</FormLabel>
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
							<FormLabel>{$t("email")}</FormLabel>
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
							<FormLabel>{$t("phone number")}</FormLabel>
							<FormControl>
								<Input
									placeholder="06X-XXXX-XXX"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">{$t("submit")}</Button>
			</form>
		</Form>
	);
};

export { UserFormRegister };
