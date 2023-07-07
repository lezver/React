import { useState } from "react";

export const SignupForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case "email":
				return setEmail(value);
			case "password":
				return setPassword(value);
		}
	};

	return (
		<form>
			<label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
			</label>
			<label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
			</label>
			<p>
				{email} \|/ {password}
			</p>
			<button type="submit">SignUp</button>
		</form>
	);
};
