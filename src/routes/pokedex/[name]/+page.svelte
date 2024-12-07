<script lang="ts">
	export let data;

	const { pokemon } = data;

	console.log(pokemon);
</script>

<h1 class="text-5xl font-bold text-gray-950">
	{pokemon.name}

	{#each pokemon.abilities as { ability }}
		<p class="font-medium">
			<span class="font-bold">Ability:</span> {ability.name}
		</p>
	{/each}
	<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}  alt=""/>
</h1>