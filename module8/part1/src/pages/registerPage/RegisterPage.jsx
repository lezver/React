import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

const RegisterPage = ({ setPageType }) => {
	const dispatch = useDispatch();

	const handlerForm = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		const registerUser = { name, email, password };
		const btn = e.target.elements[3];

		btn.disabled = true;

		console.log(registerUser);

		dispatch(register(registerUser));

		setInterval(() => {
			e.target.reset();
			btn.disabled = false;
		}, 1000);
	};

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handlerForm}>
				<input type="name" name="name" />
				<input type="email" name="email" />
				<input type="password" name="password" />
				<button type="submit">SingUp</button>
			</form>
			<button type="button" onClick={() => setPageType("login")}>
				Go to Login
			</button>
		</div>
	);
};

export default RegisterPage;
