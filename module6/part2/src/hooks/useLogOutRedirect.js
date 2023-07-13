import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogOutRedirect = () => {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) navigate("/login", { replace: true });
	}, [isLoggedIn, navigate]);
};

export default useLogOutRedirect;
