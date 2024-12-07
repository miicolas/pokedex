export async function load({ params }) {
	const { name } = params;
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
		if (!res.ok) {
			throw new Error(`Failed to fetch details for ${name}`);
		}
		const data = await res.json();
		return {
			pokemon: data
		};
	} catch (error) {
		console.error(error);
		return {
			pokemon: null,
			error: (error as Error).message
		};
	}
}