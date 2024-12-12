<script lang="ts">
	import { goto } from '$app/navigation';
	import { twMerge } from 'tailwind-merge';

	const { styleType, disabled, customClass, redirect, children, ...rest} = $props();

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

	const goTo = () => {
		if (redirect) {
			goto(redirect);
		}
	}
</script>

<button
	{...rest}
	class={twMerge(`${computedStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${customClass ? customClass : ''}`)}
	disabled={disabled}
	onclick={() => redirect && goTo()}
>
	{@render children?.()}
</button>