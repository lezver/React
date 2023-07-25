import { useSelector } from "react-redux";
import {
	selectIsLoggedIn,
	selectUser,
	selectAuthError,
} from "redux/auth/selectors";

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const user = useSelector(selectUser);
	const isAuthError = useSelector(selectAuthError);

	return { isLoggedIn, user, isAuthError };
};
