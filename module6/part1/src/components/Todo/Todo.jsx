import { useState } from "react";
import "./Todo.scss";
import { TodoForm, TodoSearch, TodoList } from "./index";

export const Todo = () => {
	const [todoList, setTodoList] = useState([]);
	const [request, setRequest] = useState("");

	const addNote = (newNote) => setTodoList((state) => [...state, newNote]);

	const deleteNote = (id) =>
		setTodoList((state) => [...state.filter((item) => item.id !== id)]);

	const filterTodoList = () =>
		todoList.filter((item) => item.text.toLowerCase().includes(request));

	return (
		<section className="todo">
			<h2>My To-do</h2>
			<TodoForm addNote={addNote} />
			<TodoSearch search={setRequest} />
			<TodoList todoList={filterTodoList()} deleteNote={deleteNote} />
		</section>
	);
};
