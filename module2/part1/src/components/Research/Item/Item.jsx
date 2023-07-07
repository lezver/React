import { FcEmptyTrash } from "react-icons/fc";
import { ItemStyle } from "./Item.styled";

export const Item = ({ toDo: { id, title, completed }, check, deleteId }) => {
	return (
		<ItemStyle>
			<div>
				<label>
					<input
						type="checkbox"
						defaultChecked={completed}
						onChange={() => check(id)}
					/>
				</label>
				<p>{title}</p>
			</div>
			<button type="button" onClick={() => deleteId(id)}>
				<FcEmptyTrash size={30} />
			</button>
		</ItemStyle>
	);
};
