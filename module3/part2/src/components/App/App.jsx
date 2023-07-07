import "./App.scss";
import { Article, ListOfNotes, SearchSection } from "components";

export const App = () => {
	return (
		<>
			<h1>Module3 - Part2</h1>
			<SearchSection />
			<ListOfNotes />
			<Article />
		</>
	);
};
