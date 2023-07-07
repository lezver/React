import "./App.scss";
import { Layout } from "components";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("pages/Home/Home"));
const About = lazy(() => import("pages/About/About"));
const Mission = lazy(() => import("components/Mission/Mission"));
const Team = lazy(() => import("components/Team/Team"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));
const Products = lazy(() => import("pages/Products/Products"));
const ProductsDetails = lazy(() =>
	import("pages/ProductsDetails/ProductsDetails")
);
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

export const App = () => {
	return (
		<>
			<h1>Module5 - Part2</h1>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />}>
						<Route path="mission" element={<Mission />} />
						<Route path="team" element={<Team />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<ProductsDetails />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};
