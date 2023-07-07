import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import "./DogDetails.scss";
import { listOfDogs } from "Backend";
import { Suspense, useRef } from "react";

const DogDetails = () => {
	const { dogId } = useParams();
	const { state } = useLocation();
	const { current } = useRef(state?.from ?? "/dogs");

	const findDog = () => listOfDogs.find((dog) => dog.id === Number(dogId));

	return (
		<div className="dog-details">
			<Link to={current} className="back">
				Back to the dogs
			</Link>
			<h3>{findDog().name}</h3>
			<ul>
				<li>
					<Link to="description">description</Link>
				</li>
				<li>
					<Link to="picture">picture</Link>
				</li>
			</ul>
			<Suspense fallback={<h3>LOADING...</h3>}>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default DogDetails;
