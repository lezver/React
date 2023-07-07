import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	useEffect(() => {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	}, []);
	useEffect(() => {
		const handlerResize = () =>
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });

		window.addEventListener("resize", handlerResize);

		return () => window.removeEventListener("resize", handlerResize);
	}, [windowSize]);

	return windowSize;
};