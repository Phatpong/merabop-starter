"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { SheetProduct } from "@/components/sheets/sheet-product";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStoreSheet } from "@/hooks/use-store-sheet";

const formSchema = z.object({
	name: z.string().min(1),
});

export const StoreSheet = () => {
	const storeSheet = useStoreSheet();

	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);

			const response = await axios.post("/api/stores", values);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<SheetProduct
			title="Create Store"
			description="Add a new store to manage products and categories"
			isOpen={storeSheet.isOpen}
			onClose={storeSheet.onClose}>
			<div>
				<div className="space-y-4 py-2 pb-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												disabled={loading}
												placeholder="E-commerce"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="pt-6 space-x-2 flex items-center justify-end w-full">
								<Button
									variant="outline"
									disabled={loading}
									onClick={storeSheet.onClose}>
									Cancel
								</Button>
								<Button
									type="submit"
									disabled={loading}>
									Continue
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</SheetProduct>
	);
};
