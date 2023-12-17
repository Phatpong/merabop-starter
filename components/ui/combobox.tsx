import { CheckIcon, ChevronsUpDown, RotateCcwIcon, type LucideIcon } from "lucide-react";
import { HTMLAttributes, type ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type ComboboxProps = ComponentPropsWithoutRef<"div"> & {
	formLabel?: string;
	formDescription?: string;
	isSelected: boolean;
	selectedData?: string;
	placeholderForEmpty: string;
	placeholderForSelect: string;
	placeholderForSelectClear?: string;
	placeholderForSearch: string;
	placeholderComboboxInput: string;
	comboboxIsOpen: boolean;
	onSelectClear: () => void;
	setComboboxIsOpen: (open: boolean) => void;
};

const Combobox = ({
	//
	formLabel,
	formDescription,
	isSelected,
	selectedData,
	placeholderForEmpty,
	placeholderForSelect,
	placeholderForSelectClear,
	placeholderForSearch,
	className,
	children,
	comboboxIsOpen,
	setComboboxIsOpen,
	onSelectClear,
}: ComboboxProps) => {
	return (
		<FormItem className={cn("flex flex-col", className)}>
			<FormLabel className="mt-1.5 mb-1">{formLabel ? formLabel : ""}</FormLabel>
			<Popover
				open={comboboxIsOpen}
				onOpenChange={setComboboxIsOpen}>
				<PopoverTrigger asChild>
					<FormControl>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={comboboxIsOpen}
							aria-label={placeholderForSelect}
							className={cn("w-full justify-between text-sm px-3 py-2", !isSelected && "text-muted-foreground")}>
							{selectedData}
							<ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</FormControl>
				</PopoverTrigger>
				<PopoverContent
					align="start"
					className="w-full p-0">
					<Command>
						<CommandInput placeholder={placeholderForSearch} />
						<CommandList>
							<CommandEmpty>{placeholderForEmpty}</CommandEmpty>
							{/* LIST RENDERING */}
							{children}
						</CommandList>

						{/* COMBOBOX :: CLEAR SELECTION */}
						{isSelected && (
							<>
								<CommandSeparator />
								<CommandGroup>
									<CommandItem
										className="text-destructive"
										onSelect={onSelectClear}>
										<RotateCcwIcon className="mr-2 h-4 w-4" />
										{placeholderForSelectClear ? placeholderForSelectClear : "Clear selection"}
									</CommandItem>
								</CommandGroup>
							</>
						)}
					</Command>
				</PopoverContent>
			</Popover>
			<FormDescription>{formDescription}</FormDescription>
			<FormMessage />
		</FormItem>
	);
};

type ComboboxItemProps = HTMLAttributes<HTMLDivElement> & {
	value: string;
	checkAlign?: "start" | "end";
	checkedIcon?: LucideIcon;
	isSelected?: boolean;
	onSelect: () => void;
};

const ComboboxItem = ({ value, children, checkAlign = "start", checkedIcon: CheckedIcon, isSelected, onSelect }: ComboboxItemProps) => {
	const getOpacity = isSelected ? "opacity-100" : "opacity-0";
	const checkedIconComponent = CheckedIcon ? <CheckedIcon className={cn("mr-2 h-4 w-4", getOpacity)} /> : <CheckIcon className={cn("mr-2 h-4 w-4", getOpacity)} />;

	return (
		<CommandItem
			className="flex items-center w-full gap-2"
			value={value}
			onSelect={onSelect}>
			{checkAlign === "start" ? (
				//COMBOBOX ITEM :: CHECK ALIGN :: START
				<div className="flex items-center">
					{checkedIconComponent}
					{children}
				</div>
			) : (
				// COMBOBOX ITEM :: CHECK ALIGN :: END
				<div className="flex items-center w-full justify-between">
					{children}
					{checkedIconComponent}
				</div>
			)}
		</CommandItem>
	);
};

export { Combobox, ComboboxItem };
