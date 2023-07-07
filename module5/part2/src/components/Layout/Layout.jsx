import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SiAtom } from "react-icons/si";
import Loader from "components/Loader/Loader";
import "./Layout.scss";

export const Layout = () => {
	return (
		<>
			<header>
				<SiAtom className="logo" />
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/products">Products</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
			<footer></footer>
		</>
	);
};
