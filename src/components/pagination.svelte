<script lang="ts">
	export let totalItems = 0;
	export let itemsPerPage = 9;
	export let currentPage = 0;

	$: totalPages = Math.ceil(totalItems / itemsPerPage);

	const goToPage = (page: number) => {
		if (page >= 0 && page < totalPages) {
			dispatch('changePage', page);
		}
	};

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

{#if totalItems > itemsPerPage}
	<div class="flex justify-between items-center gap-2 text-sm">
		<button
			on:click={() => goToPage(currentPage - 1)}
			disabled={currentPage === 0}
			aria-label="Left arrow icon"
		>
			Précédent
		</button>

		<p>{currentPage } / {totalPages}</p>

		<button
			on:click={() => goToPage(currentPage + 1)}
			disabled={currentPage === totalPages - 1}
			aria-label="Right arrow icon"
		>
			Suivant
		</button>
	</div>
{/if}
