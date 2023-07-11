import { deleteTodo } from "redux/todo/actions";
import "./TodoItem.scss";
import { useDispatch } from "react-redux";

export const TodoItem = ({ text, id }) => {
	const dispatch = useDispatch();
	const handlerBtn = (id) => dispatch(deleteTodo(id));
	return (
		<li>
			{text}{" "}
			<button type="button" onClick={() => handlerBtn(id)}>
				delete
			</button>
		</li>
	);
};
