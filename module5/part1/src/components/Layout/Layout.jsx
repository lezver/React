import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/dogs">Dogs</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Suspense fallback={<h2>Loading...</h2>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};

export default Layout;
