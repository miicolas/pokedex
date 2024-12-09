<script lang="ts">

	let { data } = $props();

</script>

<h1 class="text-5xl font-bold text-gray-950">
	{data.pokemon.name}

	{#each data.pokemon.abilities as { ability }}
		<p class="font-medium">
			<span class="font-bold">Ability:</span> {ability.name}
		</p>
	{/each}
	<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.pokemon.id}.png`}  alt=""/>
</h1>