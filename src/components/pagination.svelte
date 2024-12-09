<script lang="ts">

	let { totalItems, itemsPerPage, currentPage, inflate, deflate } = $props();

	let totalPages = $state(0);

	$effect(() => {
		totalPages = Math.ceil(totalItems / itemsPerPage);
	});


	const goToPage = (page: number, direction: 'next' | 'prev') => {
		if (page >= 0 && page < totalPages && direction === 'next') {
			currentPage = page;
			inflate(currentPage);
		}
		else {
			currentPage = page;
			deflate(currentPage);

		}
	};

</script>

{#if totalItems > itemsPerPage}
	<div class="flex justify-between items-center gap-2 text-sm">
		<button
			onclick={() => goToPage(currentPage - 1, 'prev')}
			disabled={currentPage === 0}
			aria-label="Left arrow icon"
			class="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 transition duration-200"

		>
			Précédent
		</button>

		<p>{currentPage } / {totalPages}</p>

		<button
			onclick={() => goToPage(currentPage + 1, 'next')}
			disabled={currentPage === totalPages - 1}
			aria-label="Right arrow icon"
			class="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 transition duration-200"
		>
			Suivant
		</button>
	</div>
{/if}
