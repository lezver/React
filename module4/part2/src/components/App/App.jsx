import "./App.scss";
import {
	UserProvider1,
	Ref,
	Player,
	ForwardRef,
	ToDo,
	toDoBase,
	Alert,
	UseRefExample,
} from "components";
import { FirstContext } from "components/Context/FirstContext";

export const App = () => {
	return (
		<FirstContext>
			<h1>Module4 - Part2</h1>
			<UseRefExample />
			<Alert />
			<ToDo data={toDoBase} />
			<ForwardRef />
			<Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
			<Ref />
			<UserProvider1 />
		</FirstContext>
	);
};
