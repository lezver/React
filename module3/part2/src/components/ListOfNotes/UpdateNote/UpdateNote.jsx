import "./UpdateNote.scss";
import { Component } from "react";
import { AiOutlineClose, AiOutlineSync } from "react-icons/ai";

export class UpdateNote extends Component {
	state = {
		name: "",
		text: "",
	};

	editValue = ({ currentTarget: { name, value } }) => {
		this.setState({ [name]: value });
	};

	handleUpdateNote = (e) => {
		e.preventDefault();
		const { updateNote, updateId } = this.props;
		const { name, text } = this.state;

		updateNote({ id: updateId, name, text });
	};

	render() {
		const { closeBtn } = this.props;
		return (
			<div className="update-note__backdrop">
				<div className="update-note__modal">
					<button type="button" onClick={() => closeBtn()}>
						<AiOutlineClose size={24} />
					</button>
					<form className="update-note__form" onSubmit={this.handleUpdateNote}>
						<h2>Chenge your note:</h2>
						<label>
							<input type="text" name="name" onChange={this.editValue} />
						</label>
						<label>
							<input type="text" name="text" onChange={this.editValue} />
						</label>
						<button
							type="submit"
							onClick={() => {
								setTimeout(() => {
									closeBtn();
								}, 250);
							}}
						>
							<AiOutlineSync size={24} />
						</button>
					</form>
				</div>
			</div>
		);
	}
}
