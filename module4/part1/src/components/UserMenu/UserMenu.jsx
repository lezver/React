import { useUser } from "components";

export const UserMenu = () => {
	const { username } = useUser();

	return (
		<div>
			<p>{username}</p>
		</div>
	);
};
