import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";

export const Layout = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	return (
		<>
			<header className="header">
				<nav>
					<ul>
						<li>
							<Link to="login">Log in</Link>
						</li>
						<li>
							<Link to="/"> back</Link>
						</li>
					</ul>
				</nav>
				{isLoggedIn && <UserMenu />}
			</header>
			<main className="main">
				<Outlet />
			</main>
		</>
	);
};
