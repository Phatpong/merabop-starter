import { UserFormRegister } from "@/components/form/user-form-register";

type EditePageProps = {};

const EditPage = () => {
	return (
		<div className="container flex items-center justify-center min-h-screen">
			<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos soluta quibusdam molestiae harum corporis expedita reprehenderit neque magni laborum, consequuntur illo mollitia ullam, autem voluptates molestias est ab asperiores?</div>
			<div className="sm:hidden md:block lg:block">
				<UserFormRegister />
			</div>
		</div>
	);
};

export default EditPage;
