import { useAuth } from "hooks";

const AboutPage = () => {
	const { user } = useAuth();
	return (
		<div>
			<h2>AboutPage</h2>
			<p>name: {user.name}</p>
			<p>email: {user.email}</p>
		</div>
	);
};

export default AboutPage;
