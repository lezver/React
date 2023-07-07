import { useReducer } from "react";
import "./Counter1.scss";

const countReducer = (state, { type, payload }) => {
	switch (type) {
		case "increment":
			return { ...state, count: state.count + payload };
		case "decrement":
			return { ...state, count: state.count - payload };

		default:
			return state.count;
	}
};

const init = (intialState) => {
	console.log(intialState.count);
	return { ...intialState, count: (intialState.count = 10) };
};

export const Counter1 = () => {
	const [state, dispatch] = useReducer(countReducer, { count: 0 }, init);

	return (
		<div className="counter1">
			<p>{state.count}</p>
			<div>
				<button
					type="button"
					onClick={() => dispatch({ type: "increment", payload: 10 })}
					disabled={state.count === 110}
				>
					+10
				</button>
				<button
					type="button"
					onClick={() => dispatch({ type: "decrement", payload: 10 })}
					disabled={state.count === 0}
				>
					-10
				</button>
			</div>
		</div>
	);
};
