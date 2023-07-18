import { deleteTodo } from "redux/todo/slice";
import "./TodoItem.scss";
import { useDispatch } from "react-redux";

export const TodoItem = ({ text, id }) => {
	const dispatch = useDispatch();

	return (
		<li>
			{text}{" "}
			<button type="button" onClick={() => dispatch(deleteTodo(id))}>
				delete
			</button>
		</li>
	);
};
