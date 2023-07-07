import { useOutsideClick } from "components";
import { useEffect, useRef } from "react";

export const UseRefExample = () => {
	const buttonRef = useRef();

	useOutsideClick(
		() => console.log("User clicked outside of allowed button"),
		buttonRef
	);

	return (
		<button type="button" ref={buttonRef}>
			Press me
		</button>
	);
};
