import "./Clock.scss";
import { useEffect, useState, useRef } from "react";

export const Clock = () => {
	const [time, setTime] = useState(() => new Date());

	const intervalId = useRef(null);

	useEffect(() => {
		intervalId.current = setInterval(() => setTime(new Date()), 1000);

		return () => stop();
	}, []);

	const stop = () => clearInterval(intervalId.current);

	/////////////////////////////

	const [count, setCount] = useState(0);
	const firstRender = useRef(true);

	const handleClick = (value) => {
		setCount((prevState) => prevState + value);
	};

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		console.log(`done useEffect - ${Date.now()}`);
	}, [count]);

	return (
		<div className="clock">
			<p>Current Time:{time.toLocaleTimeString()}</p>
			<button type="button" onClick={stop}>
				Stop time
			</button>

			<button type="button" onClick={() => handleClick(1)}>
				{count}
			</button>
		</div>
	);
};
