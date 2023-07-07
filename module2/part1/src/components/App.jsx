import { Counter } from "./Counter";
import { Burger } from "./Burger";
import { ColorPicker } from "./ColorPicker";
import { TodoList } from "./TodoList";
import { Counter1 } from "./Counter1";
import { Header } from "./Header";
import { Research } from "./Research";

import { toDoList, colorPickerOptions, research } from "./backend";

export const App = () => {
	return (
		<>
			<Header />
			<Research toDo={research} />
			<Counter />
			<Burger />
			<ColorPicker
				title={"Color Picker"}
				text={"Choose a color:"}
				colors={colorPickerOptions}
			/>
			<TodoList title={"Component status"} todos={toDoList} />
			<Counter1 title={"Counter"} />
		</>
	);
};
