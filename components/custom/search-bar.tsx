import { Input } from "@/components/ui/input";

type SearchBarProps = {
	onChange: (value: string) => void;
};

const SearchBar = ({ onChange }: SearchBarProps) => {
	return (
		<Input
			type="text"
			onChange={(e) => onChange(e.target.value)}
			placeholder="Search users"
		/>
	);
};

export { SearchBar };
