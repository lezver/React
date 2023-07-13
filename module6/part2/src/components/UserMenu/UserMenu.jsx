import { useDispatch, useSelector } from "react-redux";

import { logOut } from "redux/user/user";

export const UserMenu = () => {
	const user = useSelector((state) => state.user.login);
	const dispatch = useDispatch();

	const handlerExit = () => {
		dispatch(logOut());
	};

	return (
		<div>
			<p>{user}</p>
			<button type="button" onClick={handlerExit}>
				Log Out
			</button>
		</div>
	);
};
