import "./App.scss";
import {
	Products,
	ModalWindow,
	ToDo,
	Reader,
	VideoPlayer,
	publications,
	videos,
	toDoBase,
} from "components";

export const App = () => {
	return (
		<>
			<h1>Module3 - part 1</h1>
			<Products />
			<ModalWindow />
			<ToDo data={toDoBase} />
			<Reader publications={publications} />
			<VideoPlayer videos={videos} />
		</>
	);
};
