import { useParams } from "react-router-dom";
import { listOfDogs } from "Backend";

const Description = () => {
	const { dogId } = useParams();
	const findDog = () => listOfDogs.find((dog) => dog.id === Number(dogId));

	return <p>{findDog().text}</p>;
};

export default Description;
