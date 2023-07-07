import { Component } from "react";
import { ResearchStyle } from "./Research.styled";
import { Item } from "./Item";

export class Research extends Component {
	state = {
		research: this.props.toDo,
	};

	handleCheckeCompleted = (id) =>
		this.setState((prevState) => ({
			research: prevState.research.map((item) =>
				item.id === id
					? {
							...item,
							completed: !item.completed,
					  }
					: item
			),
		}));

	handeleDeleteReserch = (id) => {
		this.setState((prevState) => ({
			research: prevState.research.filter((item) => item.id !== id),
		}));
	};

	render() {
		const { research } = this.state;

		return (
			<ResearchStyle>
				<h2>My To-Do list</h2>
				<ul>
					{research.map((todo) => (
						<Item
							key={todo.id}
							toDo={todo}
							check={this.handleCheckeCompleted}
							deleteId={this.handeleDeleteReserch}
						/>
					))}
				</ul>
			</ResearchStyle>
		);
	}
}
