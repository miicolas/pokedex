<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';

	const navData: {name : string; url : string}[] = [
		{
			name:'Home',
			url: '/'
		},
		{
			name: 'Pokedex',
			url: '/pokedex'
		}
	];

</script>

<header class="w-full flex flex-col lg:flex-row justify-between items-center py-4 px-4 lg:px-20 bg-yellow-600">
	<img src={logo} alt="PokeAPI logo" class="w-auto h-24 object-contain" />
	<nav class="flex gap-10">
		{#each navData as { name, url }}
			<a href={url} class="text-gray-950 text-lg flex flex-col"
			aria-current={$page.url.pathname === url ? 'page' : undefined} data-sveltekit-preload-data>
				{name}
				{#if ($page.url.pathname === url)}
					<div class="h-1 w-6 bg-yellow-800 rounded-full mx-auto"></div>
				{/if}
			</a>
		{/each}
	</nav>
</header>