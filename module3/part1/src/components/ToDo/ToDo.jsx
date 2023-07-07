import { Component } from "react";
import "./ToDo.scss";
import { ToDoForm } from "./ToDoForm";
import { ToDoFilter } from "./ToDoFilter/ToDoFilter";
import { ToDoList } from "./ToDoList";

export class ToDo extends Component {
	state = {
		searchValue: "",
		data: this.props.data,
		isDelete: false,
		isAdd: false,
	};

	componentDidUpdate(prevProps, prevState) {
		const lenArr = prevState.data.length;
		const { data } = this.state;

		if (lenArr > data.length) {
			this.setState({ isAdd: true });

			setTimeout(() => this.setState({ isAdd: false }), 1500);
		}
		if (lenArr < data.length) {
			this.setState({ isDelete: true });

			setTimeout(() => this.setState({ isDelete: false }), 1500);
		}
	}

	AddToDo = (value) => {
		const { data } = this.state;
		this.setState({ data: [...data, value] });
	};

	searchToDo = ({ currentTarget: { value } }) => {
		this.setState({ searchValue: value });
	};

	createList = () => {
		const { searchValue, data } = this.state;

		return data.filter(({ text }) =>
			text.toLowerCase().includes(searchValue.toLowerCase())
		);
	};

	deleteToDo = (id) => {
		const { data } = this.state;

		this.setState({ data: data.filter((item) => item.id !== id) });
	};

	changeChecked = (id) => {
		this.setState((prevState) => ({
			data: prevState.data.map((item) =>
				item.id === id ? { ...item, isChecked: !item.isChecked } : item
			),
		}));
	};

	render() {
		const { isAdd, isDelete } = this.state;
		return (
			<section className="to-do">
				<h2>My To-Do list</h2>
				<ToDoForm AddToDo={this.AddToDo} />
				<ToDoFilter search={this.searchToDo} />
				{isAdd && (
					<div className="to-do__delete">
						<p>You delite To-Do</p>
					</div>
				)}
				{isDelete && (
					<div className="to-do__add">
						<p>Create new To-Do</p>
					</div>
				)}
				<ToDoList
					markup={this.createList()}
					change={this.changeChecked}
					deleteToDo={this.deleteToDo}
				/>
			</section>
		);
	}
}
