import { TodoItem } from "../TodoItem";
import "./TodoList.scss";

export const TodoList = ({ todoList, deleteNote }) => {
	return (
		<ul>
			{todoList.map(({ id, text }) => (
				<TodoItem key={id} text={text} id={id} deleteNote={deleteNote} />
			))}
		</ul>
	);
};
