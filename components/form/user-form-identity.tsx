"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { TypographyH4, TypographyP } from "@/components/typographies/typography";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userIdentityQueryFn } from "@/lib/queries-key/user-queries";
import { UserIdentityFormSchema, userIdentityFormSchema } from "@/lib/schema/user-schema";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const UserIdentityForm = () => {
	const $t = useTranslations();
	const router = useRouter();

	const form = useForm<UserIdentityFormSchema>({
		resolver: zodResolver(userIdentityFormSchema),
		defaultValues: {
			identity_card_number: "",
		},
	});

	const createUser = useMutation({
		mutationFn: async (data: UserIdentityFormSchema) => userIdentityQueryFn.createIdentityUser(data),

		onError: (error) => {
			toast.error("failed to created user");
			console.log(error);
		},

		onSuccess: (response) => {
			const userId = response.id;
			console.log(userId);
			toast.success("success to created user");
			router.push(`/user/edit-resume`);
		},
	});

	const onSubmit = async (data: UserIdentityFormSchema) => {
		console.log(data);
		createUser.mutate(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-6">
				<Card>
					<CardHeader>
						<TypographyH4>{$t("personal identity card number")}</TypographyH4>
						<TypographyP>{$t("enter your id card number to move on")}</TypographyP>
					</CardHeader>
					<CardContent>
						{/* IDENTITY */}
						<FormField
							control={form.control}
							name="identity_card_number"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>{$t("identity card number")}</FormLabel>
									<FormControl>
										<Input
											placeholder={$t("enter")}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					{/* FOOTER */}
					<CardFooter>
						<Button
							type="submit"
							className="w-full">
							{$t("save")}
						</Button>
					</CardFooter>
				</Card>
			</form>
		</Form>
	);
};

export { UserIdentityForm };
