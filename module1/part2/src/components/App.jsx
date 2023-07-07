import css from "./App.module.css";

const Head = (p) => {
	return (
		<p id={p.id} className={p.class}>
			test info
		</p>
	);
};

export const App = ({ isOnline }) => {
	return (
		<h1 className={`${css.title} ${isOnline ? css.yellow : css}`}>
			<Head id="test-id" class="test-class" />
			<span className={css.hello}>Hello</span>
			<span className={css.world}>World</span> !!!
		</h1>
	);
};
