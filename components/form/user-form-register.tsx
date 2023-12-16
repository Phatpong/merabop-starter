// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useTranslations } from "next-intl";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { userQueryFn } from "@/lib/queries-key/user-queries";
// import { userFormSchema, type UserFormSchema } from "@/lib/schema/user-schema";

// const UserFormRegister = () => {
// 	const $t = useTranslations();

// 	const queryClient = useQueryClient();

// 	const form = useForm<UserFormSchema>({
// 		resolver: zodResolver(userFormSchema),
// 		defaultValues: {
// 			first_name: "",
// 			last_name: "",
// 			username: "",
// 			email: "",
// 			phone_number: "",
// 		},
// 	});

// 	// TODO :: TOASTER SONNER
// 	// TODO :: ROUTER TO USER ADDRESS
// 	const createUser = useMutation({
// 		mutationFn: async (data: UserFormSchema) => userQueryFn.createUser(data),

// 		onError: (error) => {
// 			toast.error("failed to created userr");
// 			console.log(error);
// 		},

// 		onSuccess: (response) => {
// 			form.reset();
// 			toast.success("success to created user");
// 			console.log(response);
// 		},
// 	});

// 	const onSubmit = async (data: UserFormSchema) => {
// 		console.log(data);
// 		createUser.mutate(data);
// 	};
// 	// TODO :: RESPONSIVE MOBILE , MOBILE LIKE DESIGN
// 	// TODO :: JITTA MOBILE
// 	// TODO :: FROM ADDRESS 1 MORES
// 	// TODO :: USE FILED ARRAY REACT-HOOK-FORM
// 	// TODO :: FORM SCHEMA FROM OBJECTS TO ARRAY

// 	return (
// 		<Form {...form}>
// 			<form
// 				onSubmit={form.handleSubmit(onSubmit)}
// 				className="flex flex-col space-y-6 px-2 py-4 w-full">
// 				<div className="flex justify-between space-x-4">
// 					{/* FIRST NAME */}
// 					<FormField
// 						control={form.control}
// 						name="first_name"
// 						render={({ field }) => (
// 							<FormItem className="flex-1">
// 								<FormLabel>{"First name"}</FormLabel>
// 								<FormControl>
// 									<Input
// 										placeholder="First name"
// 										{...field}
// 									/>
// 								</FormControl>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>
// 					{/* LAST NAME */}
// 					<FormField
// 						control={form.control}
// 						name="last_name"
// 						render={({ field }) => (
// 							<FormItem className="flex-1">
// 								<FormLabel>{"Last name"}</FormLabel>
// 								<FormControl>
// 									<Input
// 										placeholder="Last name"
// 										{...field}
// 									/>
// 								</FormControl>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>
// 				</div>

// 				{/* USERNAME */}
// 				<FormField
// 					control={form.control}
// 					name="username"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>{"Username"}</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder="example1998"
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>

// 				{/* EMAIL */}
// 				<FormField
// 					control={form.control}
// 					name="email"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>{"Email"}</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder="example@email.com"
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>

// 				{/* PHONE NUMBER */}
// 				<FormField
// 					control={form.control}
// 					name="phone_number"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>{"Phone Number"}</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder="06X-XXXX-XXX"
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<Button>Submit</Button>
// 			</form>
// 		</Form>
// 	);
// };

// export { UserFormRegister };