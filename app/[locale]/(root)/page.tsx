import { UserFormRegister } from "@/components/form/user-form-register";

type Props = {};

const HomePage = (props: Props) => {
	return (
		<div className="flex justify-center items-center min-h-screen ">
			<UserFormRegister />
		</div>
	);
};

export default HomePage;
