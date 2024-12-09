<script lang="ts">
	import Button from '../components/button.svelte';
	import { onMount } from 'svelte';

	let currentPokemonIndex = 1;
	let imgLoaded = false;
	const featuredPokemon = [1, 25, 6, 150];

	onMount(() => {
		const interval = setInterval(() => {
			imgLoaded = false;
			currentPokemonIndex = (currentPokemonIndex + 1) % featuredPokemon.length;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<div class="relative min-h-[85vh] overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500">
		<div
			class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIwIiB5MT0iMTAiIHgyPSIyMCIgeTI9IjEwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]">
			<div />
		</div>

		<div class="container mx-auto px-6 lg:px-20 py-10 lg:py-0">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 min-h-[75vh] items-center">

				<!-- Texte et CTA -->
				<div class="flex flex-col gap-10 lg:gap-16 col-span-1 lg:col-span-5 relative z-10">
					<div class="space-y-6">
						<h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
							<span class="inline-block transform hover:scale-105 transition-transform">Find</span> all your favorite
							<span
								class="inline-block transform hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">Pokemon</span>
						</h1>

						<p class="text-xl lg:text-2xl text-gray-800 leading-relaxed">
							Explorez l'univers fascinant des Pokémon avec PokeAPI. Découvrez des informations détaillées sur chaque
							Pokémon,
							leurs types, capacités et bien plus encore.
						</p>
					</div>

					<div class="flex gap-4">
						<Button
							styleType="primary"
							redirect="/pokedex"
						>
							Voir le Pokédex
						</Button>


					</div>
				</div>


				<div class="col-span-1 lg:col-span-7 flex justify-center items-center relative">
					<div class="relative w-96 h-96">

						<div class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm transform -translate-y-6 scale-90"> </div>

						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${featuredPokemon[currentPokemonIndex]}.png`}
							alt="Featured Pokemon"
							class={`
              w-full h-full object-contain
              transform transition-all duration-500 hover:scale-110
              ${imgLoaded ? 'opacity-100' : 'opacity-0'}
              animate-float
            `}
							on:load={() => imgLoaded = true}
						/>
					</div>

					<div class="absolute bottom-0 flex gap-2">
						{#each featuredPokemon as _, index}
							<button
								class={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPokemonIndex ? 'bg-gray-800 w-8' : 'bg-gray-600'
              }`}
								on:click={() => currentPokemonIndex = index}
								aria-label="Image Pokémon"
							></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<style>
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }
</style>