import "./About.scss";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const About = () => {
	return (
		<div className="about">
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nam
				architecto explicabo voluptate deserunt voluptates saepe fuga numquam
				praesentium, beatae veniam. Laboriosam vitae fugiat totam, iure ut ipsum
				repellendus eligendi ab aperiam corrupti?
			</p>
			<ul>
				<li>
					<Link to="mission">Read about our mission</Link>
				</li>
				<li>
					<Link to="team">Get to know the team</Link>
				</li>
				<li>
					<Link to="reviews">Go through the reviews</Link>
				</li>
			</ul>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default About;
