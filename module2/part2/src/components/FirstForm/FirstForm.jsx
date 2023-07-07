import "./FirstForm.css";
import { Component } from "react";
import shortid from "shortid";
import { CloseButton } from "../CloseButton";

export class FirstForm extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		experience: "junior",
		licence: false,
	};

	nameInputId = shortid.generate();
	emailInputId = shortid.generate();
	passwordInputId = shortid.generate();

	handleChange = (e) => {
		const { name, value } = e.currentTarget;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitForm(this.state);
		this.setState({ licence: false });
		e.target.reset();
	};

	handleLicenceChange = (e) => {
		this.setState({
			licence: e.currentTarget.checked,
		});
	};

	render() {
		const { closeBtn } = this.props;
		const { experience, licence } = this.state;
		return (
			<form className="first-form" onSubmit={this.handleSubmit}>
				<CloseButton closeBtn={closeBtn} />

				<label htmlFor={this.nameInputId} className="first-form__name">
					Name
					<input
						id={this.nameInputId}
						type="text"
						name="name"
						onChange={this.handleChange}
					/>
				</label>
				<label htmlFor={this.emailInputId} className="first-form__email">
					Email
					<input
						id={this.emailInputId}
						type="email"
						name="email"
						onChange={this.handleChange}
					/>
				</label>
				<label htmlFor={this.passwordInputId} className="first-form__password">
					Password
					<input
						id={this.passwordInputId}
						type="password"
						name="password"
						onChange={this.handleChange}
					/>
				</label>

				<fieldset>
					<legend>Choose your level</legend>
					<label>
						<input
							type="radio"
							name="experience"
							value="junior"
							onChange={this.handleChange}
							checked={experience === "junior"}
						/>
						junior
					</label>
					<label>
						<input
							type="radio"
							name="experience"
							value="middle"
							onChange={this.handleChange}
							checked={experience === "middle"}
						/>
						middle
					</label>
					<label>
						<input
							type="radio"
							name="experience"
							value="senior"
							onChange={this.handleChange}
							checked={experience === "senior"}
						/>
						senior
					</label>
				</fieldset>

				<label>
					<input
						type="checkbox"
						name="licence"
						defaultChecked={licence}
						onClick={this.handleLicenceChange}
					/>
					you requirement with the agree
				</label>

				<button className="first-form__btn" type="submit" disabled={!licence}>
					Send
				</button>
			</form>
		);
	}
}
