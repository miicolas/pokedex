<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';

	let { children } = $props();
</script>

<Header />

<main>
	{@render children()}

</main>


<Footer />


