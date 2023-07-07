// import "./FirstPractice.scss";
import { useState, useEffect } from "react";

export const FirstPractice = () => {
	const [value, setValue] = useState(0);
	//////////////////////////////////////////////////

	useEffect(() => {
		document.title = `You clicked ${value} times`;
	});
	//////////////////////////////////////////////////

	useEffect(() => {
		console.log("Mounting phase: same when componentDidMount runs");
	}, []);
	//////////////////////////////////////////////////

	useEffect(() => {
		console.log({ value });
		console.log("Mounting phase: same when componentDidMount runs2");
	}, [value]);
	//////////////////////////////////////////////////
	const [firstValue, setFirstValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);
	useEffect(() => {
		console.log(firstValue + secondValue);
	}, [firstValue, secondValue]);

	//////////////////////////////////////////////////

	useEffect(() => {
		console.log("Mounting phase: same when componentDidMount runs");

		return () => {
			console.log("Unmounting phase: same when componentWillUnmount runs");
		};
	}, []);

	return (
		<>
			<div>
				<p>You clicked {value} times</p>
				{value}
				<button type="button" onClick={() => setValue(firstValue + 1)}>
					click me
				</button>
				<button type="button" onClick={() => setValue(secondValue - 1)}>
					-
				</button>
				{/*
					//////////////////////////////////////////////////
				*/}

				<button
					type="button"
					onClick={() => {
						setFirstValue(firstValue + 1);
					}}
				>
					First: {firstValue}
				</button>
				<button
					type="button"
					onClick={() => {
						setSecondValue(secondValue + 1);
					}}
				>
					Second: {secondValue}
				</button>
			</div>
		</>
	);
};
