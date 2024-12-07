<script lang="ts">
	import Button from '../components/button.svelte';

</script>

<div class="grid grid-col-1 lg:grid-cols-12 gap-4 bg-yellow-500 px-20 py-10 lg:py-0  justify-center items-center min-h-[75vh] h-fit">
	<div class="flex-col flex gap-16 col-span-5">
		<h1 class="text-5xl font-bold text-gray-950">
			<span class="font-bold">Find</span> all your favorite <span class="font-bold">Pokemon</span>
		</h1>
		<p class="text-2xl text-gray-950">
			PokeAPI is a website that allows you to find all your favorite Pokemon. You can search for a Pokemon by its name,
			its type, or its ability.
		</p>
		<Button
			styleType='primary'
			redirect='/pokedex'
		>
			See more Pokemons
		</Button>

	</div>
	<div class="col-span-7 flex justify-center items-center">
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
				 alt="Pikachu" class="w-96 h-96 object-contain" />
	</div>
</div>