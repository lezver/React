import { useGetPokemonByNameQuery } from "redux/pokemon/operations";
import "./Pokemon.scss";
import { useState } from "react";

export const Pokemon = () => {
	const [pokemonName, setPokemonName] = useState("");
	const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName, {
		skip: pokemonName === "",
	});

	console.log(data);

	const handlerForm = (e) => {
		e.preventDefault();

		setPokemonName(e.target.elements.pokemonName.value);

		e.target.reset();
	};

	return (
		<section className="pokemon">
			<h2>Pokemon</h2>
			<form onSubmit={handlerForm}>
				<input type="text" name="pokemonName" />
				<button type="submit">Search</button>
			</form>
			{isLoading ?? <p>Loading...</p>}
		</section>
	);
};
