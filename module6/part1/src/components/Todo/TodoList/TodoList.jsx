import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";
import "./TodoList.scss";
import { getTodo } from "redux/todo/selectors";

export const TodoList = () => {
	const todoList = useSelector(getTodo);

	return (
		<ul>
			{todoList?.map(({ id, text }) => (
				<TodoItem key={id} text={text} id={id} />
			))}
		</ul>
	);
};
