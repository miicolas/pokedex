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

<header class="w-full flex justify-between items-center py-4 px-20 bg-third">
	<img src={logo} alt="PokeAPI logo" class="w-auto h-24 object-contain" />
	<nav class="flex gap-10">
		{#each navData as { name, url }}
			<a href={url} class="text-paragraph text-lg flex flex-col"
			aria-current={$page.url.pathname === url ? 'page' : undefined}>
				{name}
				{#if ($page.url.pathname === url)}
					<div class="h-0.5 w-full bg-paragraph"></div>
				{/if}
			</a>
		{/each}
	</nav>
</header>