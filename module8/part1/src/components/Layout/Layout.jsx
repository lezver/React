import { UserMenu } from "components/UserMenu";
import { useAuth } from "hooks";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
	const { isLoggedIn } = useAuth();
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						{isLoggedIn && (
							<li>
								<NavLink to="/about">About User</NavLink>
							</li>
						)}
						{isLoggedIn ? (
							<UserMenu />
						) : (
							<>
								<li>
									<NavLink to="/register">Register</NavLink>
								</li>
								<li>
									<NavLink to="/login">Login</NavLink>
								</li>
							</>
						)}
					</ul>
				</nav>
			</header>
			<main>
				<Suspense>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
