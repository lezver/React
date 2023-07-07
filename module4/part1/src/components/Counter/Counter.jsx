import { useState, useEffect } from "react";
import "./Counter.scss";

export const Counter = () => {
	const [value, setValue] = useState(0);

	const handleValue = (newValue) => {
		setValue(value + newValue);
	};

	// const handleValue = (newValue) => {
	// 	setValue((prevState) => prevState + newValue);
	// };

	useEffect(() => console.log("started useEffect" + Date.now()), [value]);

	return (
		<div className="counter-box">
			<p>{value}</p>
			<button
				type="button"
				onClick={() => handleValue(+1)}
				disabled={value === 11}
			>
				+1
			</button>
			<button
				type="button"
				onClick={() => handleValue(-1)}
				disabled={value === 0}
			>
				-1
			</button>
		</div>
	);
};
