import { Component } from "react";
import "./ToDoForm.scss";
import { nanoid } from "nanoid";

export class ToDoForm extends Component {
	state = {
		value: "",
	};

	isVoid = ({ currentTarget: { value } }) => {
		this.setState({ value: value });
	};
	submitForm = (e) => {
		e.preventDefault();
		const { value } = e.currentTarget[0];
		const { AddToDo } = this.props;

		const newToDo = { id: nanoid(), text: value, isStadied: false };

		AddToDo(newToDo);
	};

	render() {
		const { value } = this.state;
		return (
			<form className="to-do__form" onSubmit={this.submitForm}>
				<label>
					Create To-Do:
					<input type="text" name="to-do" onChange={this.isVoid} />
				</label>
				<button disabled={!value}>Add to-do</button>
			</form>
		);
	}
}
