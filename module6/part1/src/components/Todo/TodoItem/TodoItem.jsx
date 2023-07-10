import "./TodoItem.scss";

export const TodoItem = ({ text, id, deleteNote }) => {
	const handlerBtn = (id) => deleteNote(id);
	return (
		<li>
			{text}{" "}
			<button type="button" onClick={() => handlerBtn(id)}>
				delete
			</button>
		</li>
	);
};
