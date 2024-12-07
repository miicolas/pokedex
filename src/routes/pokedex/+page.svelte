<script lang="ts">
	import Card from '../../components/card.svelte';
	import { onMount } from 'svelte';

	export let data;
	const { pokemons } = data;

	let loading = true;
	let search = '';

	const searchPokemon = (searchTerm: string) => {
		return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.types[0].type.name.toLowerCase().includes(searchTerm.toLowerCase()));
	};

	let filteredPokemons = pokemons;

	$: filteredPokemons = searchPokemon(search);

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 500);
	});

</script>

<main class="w-full flex flex-col p-20 gap-10 ">
	<input
		type="search"
		placeholder="Search"
		bind:value={search}
		class="w-full rounded-lg border-2 border-gray-950 p-2 text-gray-950 focus:border-green-500 focus:outline-none"
	>

	{#if loading}
		<p class="text-2xl text-gray-950 text-center">Loading...</p>

	{:else if filteredPokemons.length === 0}
		<p class="text-2xl text-gray-950 text-center">No Pokemons found</p>
	{:else}


		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

			{#each filteredPokemons as pokemon (pokemon.name)}
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
</main>
