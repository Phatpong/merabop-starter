import { useState } from "react";

import { Combobox, ComboboxItem } from "@/components/ui/combobox";
import { CommandGroup } from "@/components/ui/command";

type AddressType = {
	name: string;
};

const addressType = [
	{
		name: "home",
	},
	{
		name: "work",
	},
];

type ComboboxAddressTypeProps = {
	form: any;
	formLabel?: string;
	formDescription?: string;
	fieldName: string;
};

const ComboboxAddressType = ({ form, formLabel, formDescription, fieldName }: ComboboxAddressTypeProps) => {
	const [comboboxIsOpen, setComboboxIsOpen] = useState(false);

	// HANDLE SELECT
	const handleSelect = (addressType: AddressType) => {
		setComboboxIsOpen(false);
		form.setValue(fieldName, addressType.name);
	};

	// HANDLE CLEAR
	const handleClear = () => {
		setComboboxIsOpen(false);
		form.setValue(fieldName, undefined);
	};

	const selectedAddressType = addressType.find((addressType) => addressType.name === form.getValues(fieldName));

	return (
		<Combobox
			formLabel={formLabel}
			formDescription={formDescription}
			comboboxIsOpen={comboboxIsOpen}
			setComboboxIsOpen={setComboboxIsOpen}
			placeholderComboboxInput="Search address type..."
			placeholderForEmpty="Not found address type..."
			placeholderForSearch="Search address type..."
			placeholderForSelect="Select address type..."
			isSelected={!!selectedAddressType}
			selectedData={selectedAddressType ? selectedAddressType.name : "Select a address type"}
			onSelectClear={handleClear}>
			{/* COMBOBOX :: ADDRESS TYPE*/}
			<CommandGroup heading="Address Type">
				{addressType.map((addressType, addressTypeIndex) => (
					<ComboboxItem
						key={`${addressTypeIndex} - ${addressType.name}`}
						value={addressType.name}
						isSelected={form.getValues(fieldName) === addressType.name}
						onSelect={() => handleSelect(addressType)}>
						{addressType.name}
					</ComboboxItem>
				))}
			</CommandGroup>
		</Combobox>
	);
};
export { ComboboxAddressType };
