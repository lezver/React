import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "components/Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("pages/Home/Home"));
const Dogs = lazy(() => import("pages/Dogs/Dogs"));
const DogDetails = lazy(() => import("pages/DogDetails/DogDetails"));
const Description = lazy(() => import("pages/Description/Description"));
const Picture = lazy(() => import("pages/Picture/Picture"));

const App = () => {
	return (
		<>
			<h1>Module5 - Part1</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="dogs" element={<Dogs />} />
					<Route path="dogs/:dogId" element={<DogDetails />}>
						<Route path="description" element={<Description />} />
						<Route path="picture" element={<Picture />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
