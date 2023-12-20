import { UserFormRegister } from "@/components/form/user-form-register";
import { LeftNavigationBar } from "@/components/navigations/left-navigation-bar";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

type EditePageProps = {};

const EditPage = () => {
	return (
		<div className="flex justify-between bg-red-100">
			<LeftNavigationBar
				left={
					<>
						<Button
							className="w-full"
							variant="ghost">
							<HomeIcon />
							Profile
						</Button>
						<Button
							className="w-full"
							variant="ghost">
							<HomeIcon />
							Edit Resume
						</Button>
						<Button
							className="w-full"
							variant="ghost">
							<HomeIcon />
							Privacy Settings
						</Button>
						<Button
							className="w-full"
							variant="ghost">
							<HomeIcon />
							Account Settings
						</Button>
					</>
				}
			/>

			<div className="bg-green-100">
				<UserFormRegister />
			</div>
			<div className="sm:hidden md:block lg:block bg-blue-100">
				<UserFormRegister />
			</div>
		</div>
	);
};

export default EditPage;
