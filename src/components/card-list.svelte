<script lang="ts">

	import Card from './card.svelte';

	export let pokemons = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

	{#each pokemons as pokemon (pokemon.name)}
		<Card
			name={pokemon.name}
			type={pokemon.types[0].type.name}
			attack={pokemon.stats[1].base_stat}
			defense={pokemon.stats[2].base_stat}
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/').slice(-2, -1)[0]}.png`}
		/>
	{/each}
</div>