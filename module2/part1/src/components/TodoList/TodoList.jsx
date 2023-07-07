import { TodoListStyle } from "./TodoList.styled";
import { Items } from "./Items";
import { Component } from "react";

export class TodoList extends Component {
	state = {
		todos: this.props.todos,
		title: this.props.title,
	};

	deleteTodo = (todoId) => {
		this.setState((prevState) => ({
			todos: prevState.todos.filter((t) => t.id !== todoId),
		}));
	};

	render() {
		const { title, todos } = this.state;
		const complated = todos.reduce(
			(acc, { complated }) => (complated ? acc + 1 : acc),
			0
		);
		return (
			<TodoListStyle>
				<h1>{title}</h1>
				<p>total number: {todos.length}</p>
				<p>total of done: {complated}</p>
				<Items todos={todos} noDeleteTodo={this.deleteTodo} />
			</TodoListStyle>
		);
	}
}
