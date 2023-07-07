import { Component } from "react";
import { Counter1Style } from "./Counter.styled";

export class Counter1 extends Component {
	state = {
		total: 0,
	};

	handleIncrement = () =>
		this.setState((prevState) => ({ total: prevState.total + 1 }));

	handleDecrement = () =>
		this.setState((prevState) => ({ total: prevState.total - 1 }));

	render() {
		const { total } = this.state;
		const { title } = this.props;

		return (
			<Counter1Style>
				<h2>{title}</h2>
				<span>{total}</span>
				<div>
					<button onClick={this.handleIncrement} type="button">
						increment on: 1
					</button>
					<button onClick={this.handleDecrement} type="button">
						decrement on: -1
					</button>
				</div>
			</Counter1Style>
		);
	}
}
