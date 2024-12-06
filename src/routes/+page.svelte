<script lang="ts">

	import { goto } from '$app/navigation';

	function goTo() {
		goto('/pokedex');
	}

</script>

<div class="grid grid-cols-12 gap-4 bg-primary px-20 items-center h-[75vh]">
	<div class="flex-col flex gap-16 col-span-5">
		<h1 class="text-5xl font-bold text-paragraph"><span class="font-bold">Find</span> all your favorite <span
			class="font-bold">Pokemon</span></h1>
		<p class="text-2xl text-paragraph">PokeAPI is a website that allows you to find all your favorite Pokemon. You can
			search for a Pokemon by its name, its type, or its ability.</p>
		<button
			class="bg-green text-black rounded-lg shadow-xl px-4 py-1 text-2xl w-fit hover:bg-green/50 transition-colors duration-200" on:click={goTo}>
			See pokemons
		</button>
	</div>
	<div class="col-span-7 flex justify-center items-center">
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
				 alt="Pikachu" class="w-96 h-96 object-contain" />

	</div>
</div>

