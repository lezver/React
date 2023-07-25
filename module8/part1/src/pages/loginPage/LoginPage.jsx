import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

const LoginPage = ({ setPageType }) => {
	const dispatch = useDispatch();
	const handlerForm = (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		const logInUser = { email, password };
		const btn = e.target.elements[2];
		btn.disabled = true;

		console.log(e.target.elements);

		dispatch(logIn(logInUser));

		setTimeout(() => {
			btn.disabled = false;
			e.target.reset();
		}, 1000);
	};
	return (
		<div>
			<h2>LogIn</h2>
			<form onSubmit={handlerForm}>
				<input type="email" name="email" />
				<input type="password" name="password" />
				<button type="submit">LogIn</button>
			</form>
			<button type="button" onClick={() => setPageType("register")}>
				Go to register!
			</button>
		</div>
	);
};

export default LoginPage;
