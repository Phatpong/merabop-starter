import { useState } from "react";

import { Combobox, ComboboxItem } from "@/components/ui/combobox";
import { CommandGroup } from "@/components/ui/command";
import { countries } from "@/lib/countries";

type Country = {
	name: string;
};

type ComboboxCountryProps = {
	form: any;
	formLabel?: string;
	formDescription?: string;
	fieldName: string;
};

const ComboboxCountry = ({ form, formLabel, formDescription, fieldName }: ComboboxCountryProps) => {
	const [comboboxIsOpen, setComboboxIsOpen] = useState(false);

	// HANDLE SELECT
	const handleSelect = (country: Country) => {
		setComboboxIsOpen(false);
		form.setValue(fieldName, country.name);
	};

	// HANDLE CLEAR
	const handleClear = () => {
		setComboboxIsOpen(false);
		form.setValue(fieldName, undefined);
	};

	const selectedCountry = countries.find((country) => country.name === form.getValues(fieldName));

	return (
		<Combobox
			formLabel={formLabel}
			formDescription={formDescription}
			comboboxIsOpen={comboboxIsOpen}
			setComboboxIsOpen={setComboboxIsOpen}
			placeholderComboboxInput="Search country..."
			placeholderForEmpty="Not found country..."
			placeholderForSearch="Search country..."
			placeholderForSelect="Select country..."
			isSelected={!!selectedCountry}
			selectedData={selectedCountry ? selectedCountry.name : "Select a country"}
			onSelectClear={handleClear}>
			{/* COMBOBOX :: COUNTRY*/}
			<CommandGroup heading="Country">
				{countries.map((country, countryIndex) => (
					<ComboboxItem
						key={`${countryIndex} - ${country.name}`}
						value={country.name}
						isSelected={form.getValues(fieldName) === country.name}
						onSelect={() => handleSelect(country)}>
						{country.name}
					</ComboboxItem>
				))}
			</CommandGroup>
		</Combobox>
	);
};
export { ComboboxCountry };
