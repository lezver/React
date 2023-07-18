import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";
import "./TodoList.scss";
import { selectTodo } from "redux/todo/selectors";

export const TodoList = () => {
	const todoList = useSelector(selectTodo);

	return (
		<ul>
			{todoList?.map(({ id, text }) => (
				<TodoItem key={id} text={text} id={id} />
			))}
		</ul>
	);
};
