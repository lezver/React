import "./Form.scss";
import { useLocalStorage } from "components";

export const Form = () => {
	const [email, setEmail] = useLocalStorage("email", "");
	const [password, setPassword] = useLocalStorage("password", "");

	const handleChange = (e) => {
		e.preventDefault();
		const { elements } = e.target;

		setEmail(elements[0].value);
		setPassword(elements[1].value);

		e.target.reset();
	};

	return (
		<form className="form1" onSubmit={handleChange}>
			<label>
				Email:
				<input type="email" name="email" />
			</label>
			<label>
				Password:
				<input type="password" name="password" />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};
