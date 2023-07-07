import { useUser } from "components";

export const UserMenu = () => {
	const { isLoggedIn, username, logIn, logOut } = useUser();

	return (
		<div>
			{isLoggedIn && <p>{username}</p>}

			{isLoggedIn ? (
				<button type="button" onClick={logOut}>
					Log out
				</button>
			) : (
				<button type="button" onClick={logIn}>
					Log in
				</button>
			)}
		</div>
	);
};
