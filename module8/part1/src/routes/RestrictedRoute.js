import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ isLoggedIn, children }) => {
	if (isLoggedIn) {
		return <Navigate to="/about" replace />;
	}
	return children;
};
