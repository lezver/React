import "./ToDoList.scss";

export const ToDoList = ({ markup, change, deleteToDo, changeChecked }) => {
	return (
		<>
			<ul className="to-do__list">
				{markup.length <= 0 ? (
					<li>
						<h3>Sorry, you don't have To-Do...</h3>
					</li>
				) : (
					markup.map(({ id, text, isChecked }) => (
						<li key={id}>
							<input
								type="checkbox"
								defaultChecked={isChecked}
								onChange={() => change(id)}
							/>
							<span>{text}</span>
							<button
								disabled={!isChecked}
								onClick={() => deleteToDo(id)}
								type="button"
							>
								Delete
							</button>
						</li>
					))
				)}
			</ul>
		</>
	);
};
