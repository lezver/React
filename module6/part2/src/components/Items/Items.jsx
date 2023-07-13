import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "redux/items/items";

export const Items = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	const items = useSelector((state) => state.items.arr);

	const handlerAdd = () => {
		dispatch(add(value));
		setValue("");
	};

	return (
		<>
			<label>
				Enter number:
				<input
					type="text"
					value={value}
					onChange={({ target: { value } }) => setValue(Number(value))}
				/>
			</label>
			<button type="button" onClick={handlerAdd}>
				{" "}
				Add
			</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item}
						<button type="button" onClick={() => dispatch(remove(item))}>
							delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
