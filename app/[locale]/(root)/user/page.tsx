import { UserIdentityForm } from "@/components/form/user-form-identity";

type UserPageProps = {};

const UserPage = ({}: UserPageProps) => {
	return (
		<main className="flex items-center justify-center min-h-screen">
			<UserIdentityForm />
		</main>
	);
};

export default UserPage;
