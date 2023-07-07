import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./Dogs.scss";
import { listOfDogs } from "Backend";

const Dogs = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const dogId = searchParams.get("dogId") ?? "";

	const updateQueryString = ({ target: { value } }) => {
		return value === ""
			? setSearchParams({ dogId: "" })
			: setSearchParams({ dogId: value });
	};

	const filterDog = listOfDogs.filter((dog) =>
		dog.name.toLowerCase().includes(dogId.toLowerCase())
	);

	return (
		<div>
			<input
				className="search"
				type="text"
				value={dogId}
				onChange={updateQueryString}
			/>
			{filterDog.length !== 0 && (
				<ul className="dogs">
					{filterDog.map((dog) => (
						<li key={dog.id}>
							<Link to={`${dog.id.toString()}`} state={{ from: location }}>
								{dog.name}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dogs;
