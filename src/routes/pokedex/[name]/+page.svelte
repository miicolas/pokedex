<script lang="ts">
	import DetailPokemon from '../../../components/detail-pokemon.svelte';
	import Button from '../../../components/button.svelte';

	let { data } = $props();
	console.log(data.pokemon);
	const pokemon = data.pokemon;


</script>

<section class="container mx-auto px-4 py-10">
	<!-- Titre -->
	<h1 class="text-5xl font-bold text-gray-900 capitalize text-center mb-6">
		{pokemon.name}
	</h1>

	<Button styleType="primary" redirect="/pokedex">Back to Pokedex</Button>
	<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
		<div class="flex-shrink-0">
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
				alt={pokemon.name}
				class="w-64 h-64 object-contain drop-shadow-lg"
			/>
		</div>


		<div class="flex-1 bg-gray-100 rounded-xl shadow-lg p-6">

			<div class="mb-4">
				<h2 class="text-2xl font-semibold text-gray-800">Abilities</h2>
				<ul class="list-disc list-inside mt-2">
					{#each pokemon.abilities as { ability }}
						<li class="capitalize text-gray-700">{ability.name}</li>
					{/each}
				</ul>
			</div>

			<div class="mb-4">
				<h2 class="text-2xl font-semibold text-gray-800">Stats</h2>
				<ul class="mt-2 space-y-1">
					<DetailPokemon typeDetail="Type" detail={pokemon.types[0].type.name} />
					{#each pokemon.stats as stat}
						<DetailPokemon typeDetail={stat.stat.name} detail={stat.base_stat} />
					{/each}
				</ul>
			</div>

			<div class="mb-4">
				<h2 class="text-2xl font-semibold text-gray-800">Details</h2>
				<ul class="mt-2 space-y-1">
					<DetailPokemon typeDetail="Weight" detail={pokemon.weight / 10} detailUnit="kg" />
					<DetailPokemon typeDetail="Height" detail={pokemon.height / 10} detailUnit="m" />
					<DetailPokemon typeDetail="Base Experience" detail={pokemon.base_experience} />
					<DetailPokemon typeDetail="Species" detail={pokemon.species.name} />
				</ul>
			</div>

			<div>
				<h2 class="text-2xl font-semibold text-gray-800">Location</h2>
				<p class="text-gray-700 mt-2">
					<a
						href={pokemon.location_area_encounters}
						class="underline text-blue-600 hover:text-blue-800 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Encounter Areas
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
