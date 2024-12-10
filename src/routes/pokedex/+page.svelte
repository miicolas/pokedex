<script lang="ts">
	import Card from '../../components/card.svelte';
	import Pagination from '../../components/pagination.svelte';

	interface Pokemon {
		name: string;
		types: { type: { name: string } }[];
		stats: { base_stat: number }[];
		url: string;
	}

	interface Data {
		pokemons: Pokemon[];
		total: number;
		limit: number;
		page: number;
	}

	let { data }: { data: Data } = $props();
	const pokemonsData: Pokemon[] = data.pokemons;

	let currentPage = 0;
	let search: string = $state('');
	let filterByType: string = $state('all');
	let filteredPokemons: Pokemon[] = $state(pokemonsData || []);
	let paginatedPokemons: Pokemon[] = $state([]);

	const searchPokemon = (searchTerm: string): Pokemon[] => {
		return pokemonsData.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			pokemon.types.some(type => type.type.name.toLowerCase().includes(searchTerm.toLowerCase()))
		);
	};

	const getUniqueTypes = (): string[] => {
		const types = new Set<string>();
		if (pokemonsData) {
			pokemonsData.forEach(pokemon => {
				pokemon.types.forEach(type => types.add(type.type.name));
			});
		}
		return Array.from(types);
	};

	$effect(() => {
		filteredPokemons = searchPokemon(search)
			.filter(pokemon => filterByType === 'all' || pokemon.types.some(type => type.type.name === filterByType));
	});

	$effect(() => {
		paginatedPokemons = filteredPokemons.slice(currentPage * data.limit, (currentPage + 1) * data.limit);
	});

</script>

<main class="w-full flex flex-col p-20 gap-10 mx-auto">
	<div class="flex items-start gap-4">
		<input
			type="search"
			placeholder="Search"
			bind:value={search}
			class="w-full rounded-lg border-2 border-gray-950 p-2 text-gray-950 focus:border-green-500 focus:outline-none"
		>
		<select
			bind:value={filterByType}
			class="max-w-fit rounded-lg border-2 border-gray-950 p-2 text-gray-950 focus:border-green-500 focus:outline-none"
		>
			<option value="all">All</option>
			{#each getUniqueTypes() as type}
				<option value={type}>{type}</option>
			{/each}
		</select>
	</div>

	{#if filteredPokemons && filteredPokemons.length === 0}
		<p class="text-2xl text-gray-950 text-center">No Pokemons found</p>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
			{#each paginatedPokemons as pokemon (pokemon.name)}
				<Card
					name={pokemon.name}
					type={pokemon.types[0].type.name}
					attack={pokemon.stats[1].base_stat}
					defense={pokemon.stats[2].base_stat}
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/').slice(-2, -1)[0]}.png`}
				/>
			{/each}
		</div>
	{/if}

	<Pagination
		totalItems={data.total}
		itemsPerPage={data.limit}
		currentPage={data.page}
		inflate={(page: Data['page']) => {
        window.location.search = `?page=${page}`;
    }}
		deflate={(page: Data['page']) => {
        window.location.search = `?page=${page}`;
    }}
	/>
</main>