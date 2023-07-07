import { useParams } from "react-router-dom";
import { listOfDogs } from "Backend";

const Picture = () => {
	const { dogId } = useParams();
	const findDog = () => listOfDogs.find((dog) => dog.id === Number(dogId));

	return (
		<>
			<img src={findDog().url} alt="dog" />
		</>
	);
};

export default Picture;
