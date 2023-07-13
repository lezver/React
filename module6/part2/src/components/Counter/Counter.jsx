import { useDispatch, useSelector } from "react-redux";
import "./Counter.scss";
import { decrement, increment } from "redux/myValue/myValue";

export const Counter = () => {
	const value = useSelector((state) => state.myValue);
	const dispatch = useDispatch();

	return (
		<div className="counter">
			<p>{value}</p>
			<div>
				<button type="button" onClick={() => dispatch(increment(1))}>
					increment
				</button>
				<button type="button" onClick={() => dispatch(decrement(1))}>
					decrement
				</button>
			</div>
		</div>
	);
};
