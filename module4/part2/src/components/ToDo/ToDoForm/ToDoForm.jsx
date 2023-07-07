import "./ToDoForm.scss";
import { nanoid } from "nanoid";

export const ToDoForm = ({ AddToDo }) => {
	const submitForm = (e) => {
		e.preventDefault();

		const { value } = e.currentTarget[0];
		if (value) {
			const newToDo = { id: nanoid(), text: value, isStadied: false };

			AddToDo(newToDo);
		} else {
			return;
		}
		e.target.reset();
	};

	return (
		<form className="to-do__form" onSubmit={submitForm}>
			<label>
				Create To-Do:
				<input type="text" name="to-do" />
			</label>
			<button>Add to-do</button>
		</form>
	);
};
