<script lang="ts">
	import { goto } from '$app/navigation';
	import { twMerge } from 'tailwind-merge';

	export let styleType: 'primary' | 'secondary' | 'danger' = '';
	export let disabled: boolean = false;
	export let customClass: string | null = '';
	export let redirect: string | null = null;

	const style = [
		{
			nameType: 'primary',
			class: 'bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-xl px-4 py-1 transition-colors duration-200'
		},
		{
			nameType: 'danger',
			class: 'bg-red-500 text-white hover:bg-red-600 rounded-lg shadow-xl px-4 py-1 transition-colors duration-200'
		},
		{
			nameType: 'secondary',
			class: 'bg-gray-500 text-white hover:bg-gray-600 rounded-lg shadow-xl px-4 py-1 transition-colors duration-200'
		}
	];

	const computedStyle = style.find(s => s.nameType === styleType)?.class;

	function goTo() {
		if (redirect) {
			goto(redirect);
		}
	}
</script>

<button
	{...$$restProps}
	class={twMerge(`${computedStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${customClass ? customClass : ''}`)}
	disabled={disabled}
	on:click={() => redirect && goTo()}
>
	<slot />
</button>