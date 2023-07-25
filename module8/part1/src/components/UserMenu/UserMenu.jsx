import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();
	return (
		<>
			<p>{user.name}</p>
			<button type="button" onClick={() => dispatch(logOut())}>
				LogOut
			</button>
		</>
	);
};
