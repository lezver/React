import { useState } from "react";

export const ColorPicker = ({ options }) => {
	const [activeOptionIdx, setActiveOptionIdx] = useState(0);

	const { label } = options[activeOptionIdx];

	const makeOptionClassName = (index) => {
		return index === activeOptionIdx ? console.log(label) : "";
	};

	return (
		<>
			<h2>Color Picker</h2>
			<p style={{ color: label, fontSize: "24px" }}>Chused color: {label}</p>
			<ul>
				{options.map(({ label, color }, index) => (
					<li key={label}>
						<button
							type="button"
							style={{ background: color, height: "50px", width: "50px" }}
							onClick={() => setActiveOptionIdx(index)}
						></button>
					</li>
				))}
			</ul>
		</>
	);
};
