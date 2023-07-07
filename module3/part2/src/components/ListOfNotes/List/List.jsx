import "./List.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { UpdateNote } from "../UpdateNote";
import { Component } from "react";

export class List extends Component {
	state = {
		isHidden: false,
		noteId: "",
	};

	handleChangeNote = (id) => {
		this.setState((prevState) => ({
			isHidden: !prevState.isHidden,
			noteId: id,
		}));
	};

	render() {
		const { list, onDelete, updateNote } = this.props;
		const { isHidden, noteId } = this.state;

		return (
			<ul className="list">
				{list.map(({ id, name, text }) => (
					<li key={id}>
						<div>
							<div>
								<p>Name: {`[${name}]`}</p>
								<span>text: {`{${text}}`}</span>
							</div>
							<button type="button" onClick={() => this.handleChangeNote(id)}>
								Change
							</button>
							<button type="button" onClick={() => onDelete(id)}>
								<AiOutlineDelete size={24} />
							</button>
						</div>
						{isHidden && (
							<UpdateNote
								updateId={noteId}
								updateNote={updateNote}
								closeBtn={this.handleChangeNote}
							/>
						)}
					</li>
				))}
			</ul>
		);
	}
}
