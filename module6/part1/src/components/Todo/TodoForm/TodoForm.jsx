import "./TodoForm.scss";
import { nanoid } from "nanoid";

export const TodoForm = ({ addNote }) => {
	const id = nanoid();

	const handlerForm = (e) => {
		e.preventDefault();
		const { value } = e.target.elements.text;

		const newNote = {
			id: id,
			text: value,
		};

		addNote(newNote);

		e.target.reset();
	};
	return (
		<form className="todo-form" onSubmit={handlerForm}>
			<label>
				Text:
				<input type="text" name="text" />
			</label>
			<button type="submit">Create</button>
		</form>
	);
};
