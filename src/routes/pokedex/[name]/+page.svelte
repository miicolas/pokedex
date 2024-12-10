<script lang="ts">
	import DetailPokemon from '../../../components/detail-pokemon.svelte';
	import Button from '../../../components/button.svelte';

	let { data } = $props();
	console.log(data.pokemon);
	const pokemon = data.pokemon;


	const capitalizeFirstLetter = (val: string) => {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}

</script>

<section class="container mx-auto px-4 py-10">
	<h1 class="text-5xl font-bold text-gray-900 capitalize text-center mb-6">
		{pokemon.name}
	</h1>

	<Button styleType="primary" redirect="/pokedex" customClass="mb-4">Back to Pokedex</Button>
	<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 h-full">
		<div class="flex-shrink-0 bg-gray-100 rounded-xl shadow-lg p-6">
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
				alt={pokemon.name}
				class="w-full h-auto object-contain drop-shadow-lg"
			/>
		</div>


		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
			<div class="bg-gray-100 rounded-xl shadow-lg p-6">
				<h2 class="text-2xl font-semibold text-gray-800">Abilities</h2>
				<ul class="list-disc list-inside mt-2">
					{#each pokemon.abilities as { ability }}
						<li class="capitalize text-gray-700">{ability.name}</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gray-100 rounded-xl shadow-lg p-6">
				<h2 class="text-2xl font-semibold text-gray-800">Stats</h2>
				<ul class="mt-2 space-y-1">
					<DetailPokemon typeDetail="Type" detail={pokemon.types[0].type.name} />
					{#each pokemon.stats as stat}
						<DetailPokemon typeDetail={capitalizeFirstLetter(stat.stat.name)} detail={stat.base_stat} />
					{/each}
				</ul>
			</div>

			<div class="bg-gray-100 rounded-xl shadow-lg p-6">
				<h2 class="text-2xl font-semibold text-gray-800">Details</h2>
				<ul class="mt-2 space-y-1">
					<DetailPokemon typeDetail="Weight" detail={pokemon.weight / 10} detailUnit="kg" />
					<DetailPokemon typeDetail="Height" detail={pokemon.height / 10} detailUnit="m" />
					<DetailPokemon typeDetail="Base Experience" detail={pokemon.base_experience} />
					<DetailPokemon typeDetail="Species" detail={pokemon.species.name} />
				</ul>
			</div>


		</div>
	</div>
</section>
