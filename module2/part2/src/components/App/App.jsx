import "./App.css";
import { products } from "../backend";
import { Header } from "../Header";
import { Search } from "../Search";

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Search products={products} />
			</main>
			<footer></footer>
		</>
	);
};
