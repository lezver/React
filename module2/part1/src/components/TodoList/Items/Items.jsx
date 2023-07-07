import { ItemsStyle } from "./Items.styled";

export const Items = ({ todos, noDeleteTodo }) => {
	return (
		<ItemsStyle>
			{todos.map(({ id, text, complated }) => {
				return (
					<li key={id}>
						<p>{text}</p>
						<button onClick={() => noDeleteTodo(id)} type="button">
							Delete
						</button>
					</li>
				);
			})}
		</ItemsStyle>
	);
};
