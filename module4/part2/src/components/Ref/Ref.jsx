import { useRef } from "react";
export const Ref = () => {
	const btnRef = useRef();
	const handleClick = () => {
		console.log("it's worked");
	};
	return (
		<button type="button" ref={btnRef} onClick={handleClick}>
			Button with ref
		</button>
	);
};
