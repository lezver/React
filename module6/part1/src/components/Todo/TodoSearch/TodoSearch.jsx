import "./TodoSearch.scss";

export const TodoSearch = ({ search }) => {
	const handlerSearch = ({ target: { value } }) => search(value);
	return (
		<label className="search">
			Search:
			<input type="text" onChange={handlerSearch} />
		</label>
	);
};
