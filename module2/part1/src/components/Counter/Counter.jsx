import { Component } from "react";
import { CounterBox } from "./Counter.styled";
import { Controls } from "./Controls";
import { Value } from "./Value";

export class Counter extends Component {
	static defaultProps = {
		initialValue: 0,
	};
	state = {
		value: this.props.initialValue,
	};
	handelIncrement = (e) => {
		this.setState((prevState) => {
			if (prevState.value === 10) {
				return { value: 10 };
			} else {
				return { value: prevState.value + 1 };
			}
		});
	};
	handelDecrement = (e) => {
		this.setState((prevState) => {
			if (prevState.value === 0) {
				return { value: 0 };
			} else {
				return { value: prevState.value - 1 };
			}
		});
	};

	render() {
		return (
			<CounterBox>
				<Value value={this.state.value} />
				<Controls
					onIncrement={this.handelIncrement}
					onDicrement={this.handelDecrement}
				/>
			</CounterBox>
		);
	}
}
