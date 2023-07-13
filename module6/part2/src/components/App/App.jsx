import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Counter, Items, Layout } from "components";
import { LoginPage, DashboardPage } from "pages";

export const App = () => {
	return (
		<>
			<h1>Module6 - Part2</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<LoginPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Route>
			</Routes>

			<Items />
			<Counter />
		</>
	);
};
