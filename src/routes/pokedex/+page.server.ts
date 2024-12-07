export async function load() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
	const data = await response.json();
	if (!response.ok) {
		throw new Error('Failed to load pokemons');
	}

	const pokemons = await Promise.all(
		data.results.map(async (pokemon:any) => {
			const detailsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}`);
			if (!detailsResponse.ok) {
				throw new Error(`Failed to load details for ${pokemon.name}`);
			}
			const details = await detailsResponse.json();
			return {
				...pokemon,
				abilities: details.abilities,
				height: details.height,
				weight: details.weight,
				stats: details.stats,
				types: details.types,
			};
		})
	);




	return {
		pokemons
	};
}
