export const Controls = ({ onIncrement, onDicrement }) => {
	return (
		<div>
			<button type="button" onClick={onDicrement}>
				Decrement on 1
			</button>
			<button type="button" onClick={onIncrement}>
				Increment on 1
			</button>
		</div>
	);
};
