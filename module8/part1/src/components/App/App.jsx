import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import { lazy, useEffect } from "react";
import { ProtectedRoute, RestrictedRoute } from "routes";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
const Home = lazy(() => import("pages/homePage/HomePage"));
const LoginPage = lazy(() => import("pages/loginPage/LoginPage"));
const RegisterPage = lazy(() => import("pages/registerPage/RegisterPage"));
const NotFoutd = lazy(() => import("pages/notFound/NotFound"));
const AboutUser = lazy(() => import("pages/aboutPage/AboutPage"));

export const App = () => {
	const dispatch = useDispatch();

	const { isRefreshing, isLoggedIn } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return (
		<>
			<h1>Module8 - Part1</h1>
			{isRefreshing ? (
				<>Loading ...</>
			) : (
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route
							path="about"
							element={
								<ProtectedRoute isLoggedIn={isLoggedIn}>
									<AboutUser />
								</ProtectedRoute>
							}
						/>
						<Route
							path="login"
							element={
								<RestrictedRoute isLoggedIn={isLoggedIn}>
									<LoginPage />
								</RestrictedRoute>
							}
						/>
						<Route
							path="register"
							element={
								<RestrictedRoute isLoggedIn={isLoggedIn}>
									<RegisterPage />
								</RestrictedRoute>
							}
						/>
						<Route path="*" element={<NotFoutd />} />
					</Route>
				</Routes>
			)}
		</>
	);
};
