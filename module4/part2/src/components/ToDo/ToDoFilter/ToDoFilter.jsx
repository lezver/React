import "./ToDoFilter.scss";

export const ToDoFilter = ({ search }) => {
	return (
		<label className="to-do__filter">
			Search To-Do:
			<input type="text" name="filter" onChange={search} />
		</label>
	);
};
