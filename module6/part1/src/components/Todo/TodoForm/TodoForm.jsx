import { useDispatch } from "react-redux";
import "./TodoForm.scss";
import { nanoid } from "nanoid";
import { addTodo } from "redux/todo/actions";

export const TodoForm = () => {
	const dispatch = useDispatch();

	const handlerForm = (e) => {
		e.preventDefault();
		const { value } = e.target.elements.text;

		dispatch(addTodo({ id: nanoid(), text: value }));

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
