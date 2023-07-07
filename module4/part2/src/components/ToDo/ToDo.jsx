import "./ToDo.scss";
import { ToDoForm } from "./ToDoForm";
import { ToDoFilter } from "./ToDoFilter";
import { ToDoList } from "./ToDoList";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ToDo = ({ data }) => {
	const [toDo, setToDo] = useState(data);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		const localTodo = localStorage.getItem("todo");
		if (localTodo) {
			setToDo(JSON.parse(localTodo));
		} else {
			localStorage.setItem("todo", JSON.stringify(toDo));
		}
		localStorage.setItem("todo", JSON.stringify(toDo));
	}, []);

	useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(toDo));
	}, [toDo]);

	const AddToDo = (value) => {
		if (toDo.find(({ text }) => text === value.text)) {
			toast.error("Sorry, but you allready have this To-Do");
		} else {
			toast.success("Create new To-Do");
			setToDo([...toDo, value]);
		}
	};

	const searchToDo = ({ currentTarget: { value } }) => {
		setSearchValue(value);
	};

	const createList = () =>
		toDo.filter(({ text }) =>
			text.toLowerCase().includes(searchValue.toLowerCase())
		);

	const deleteToDo = (id) => {
		toast.error("You delite To-Do");
		setToDo(toDo.filter((item) => item.id !== id));
	};

	const changeChecked = (id) =>
		setToDo((prevState) =>
			prevState.map((item) =>
				item.id === id ? { ...item, isChecked: !item.isChecked } : item
			)
		);

	return (
		<section className="to-do">
			<h2>My To-Do list</h2>
			<Toaster />
			<ToDoForm AddToDo={AddToDo} />
			<ToDoFilter search={searchToDo} />
			<ToDoList
				markup={createList()}
				change={changeChecked}
				deleteToDo={deleteToDo}
			/>
		</section>
	);
};
