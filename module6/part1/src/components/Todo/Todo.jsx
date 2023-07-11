import "./Todo.scss";
import { TodoForm, TodoSearch, TodoList } from "./index";

export const Todo = () => (
	<section className="todo">
		<h2>My To-do</h2>
		<TodoForm />
		<TodoList />
	</section>
);
