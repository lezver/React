import "./SecondForm.css";
import { Component } from "react";
import { CloseButton } from "components/CloseButton";

export class SecondForm extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		sex: "",
		isChecked: false,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { onSubmitForm, closeBtn } = this.props;

		onSubmitForm(this.state);

		this.setState({ isChecked: false });

		this.state = {
			name: "",
			email: "",
			password: "",
			sex: "",
			isChecked: false,
		};

		closeBtn();
	};

	handleInputValue = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};

	handleChacked = ({ currentTarget: { checked } }) => {
		this.setState({ isChecked: checked });
	};

	handleSex = ({ target: { value } }) => {
		const { sex } = this.state;
		this.setState({ sex: value });
	};

	render() {
		const { closeBtn } = this.props;
		const { isChecked, sex } = this.state;

		return (
			<div className="second-form">
				<CloseButton closeBtn={closeBtn} />
				<h2>Send your info:</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name
						<input type="text" name="name" onChange={this.handleInputValue} />
					</label>
					<label>
						Email
						<input type="email" name="email" onChange={this.handleInputValue} />
					</label>
					<label>
						Password
						<input
							type="password"
							name="password"
							onChange={this.handleInputValue}
						/>
					</label>
					<fieldset>
						<legend>Sex:</legend>
						<label>
							<input
								type="radio"
								name="sex"
								value="male"
								onChange={this.handleSex}
								checked={sex === "male"}
							/>
							male
						</label>
						<label>
							<input
								type="radio"
								name="sex"
								value="female"
								onChange={this.handleSex}
								checked={sex === "female"}
							/>
							female
						</label>
					</fieldset>
					<label>
						<input
							type="checkbox"
							name="isChecked"
							defaultChecked={isChecked}
							onClick={this.handleChacked}
						/>
						I'm agree.
					</label>
					<button type="submit" disabled={!isChecked}>
						Send
					</button>
				</form>
			</div>
		);
	}
}
