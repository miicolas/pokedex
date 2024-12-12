export async function load({ url }) {
	const limit = 9;
	const page = Number(url.searchParams.get('page')) || 1;

	const offset = (page - 1 ) * limit;

	const fetchPokemons = async (offset: number, limit: number) => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
		if (!response.ok) {
			throw new Error('Failed to load Pokémon');
		}
		const data = await response.json();
		return data.results;
	};

	const pokemons = await fetchPokemons(offset, limit);

	// Charger les détails pour les Pokémon actuels
	const detailedPokemons = await Promise.all(
		pokemons.map(async (pokemon: any) => {
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
		pokemons: detailedPokemons,
		page,
		limit,
		total: 1008,
	};
}
