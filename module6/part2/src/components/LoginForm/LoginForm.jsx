import { useDispatch } from "react-redux";
import { logIn } from "redux/user/user";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerForm = (e) => {
		e.preventDefault();

		const loginValue = e.target.elements.login.value;

		dispatch(logIn(loginValue));
		navigate("/dashboard", { replace: true });

		e.target.reset();
	};

	return (
		<>
			<form className="form" onSubmit={handlerForm}>
				<input type="text" name="login" />
				<button type="submit">Log in</button>
			</form>
		</>
	);
};
