import "./App.scss";
import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";
import { Footer } from "components/Footer/Footer";
import { Products } from "components/Products/Products";
import { Todo } from "components";

export const App = () => (
	<>
		<h1>Module7 - Part2</h1>
		<Todo />
		<Products />
		<Header />
		<Main />
		<Footer />
	</>
);
