<script lang="ts">
	import Card from '../../components/card.svelte';
	import Pagination from '../../components/pagination.svelte';
	import { onMount } from 'svelte';

	export let data;
	const { pokemons, total, limit, page } = data;

	let currentPage = 0; // Page actuelle
	let search: string = '';
	let filterByType: string = 'all';
	let filteredPokemons = pokemons;

	// Filtrer les Pokémons
	const searchPokemon = (searchTerm: string) => {
		return pokemons.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			pokemon.types.some(type => type.type.name.toLowerCase().includes(searchTerm.toLowerCase()))
		);
	};

	// Liste des types uniques
	const getUniqueTypes = () => {
		const types = new Set<string>();
		pokemons.forEach(pokemon => {
			pokemon.types.forEach(type => types.add(type.type.name));
		});
		return Array.from(types);
	};

	// Appliquer les filtres et la pagination
	$: filteredPokemons = searchPokemon(search)
		.filter(pokemon => filterByType === 'all' || pokemon.types.some(type => type.type.name === filterByType));

	$: paginatedPokemons = filteredPokemons.slice(currentPage * limit, (currentPage + 1) * limit); // Pagination des Pokémons filtrés par recherche et type sélectionné

</script>

<main class="w-full flex flex-col p-20 gap-10">
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

	{#if filteredPokemons.length === 0}
		<p class="text-2xl text-gray-950 text-center">No Pokemons found</p>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

	<!-- Pagination -->
	<Pagination
		totalItems={total}
		itemsPerPage={limit}
		currentPage={page}
		on:changePage={(e) => {
				window.location.search = `?page=${e.detail}`;
			}}
	/>
</main>
