<script lang="ts">
	export let name: string;
	export let type: 'normal' | 'fire' | 'electric' | 'water' | 'grass' | 'poison' | 'flying' | 'bug' | 'fighting' | 'ground' | 'rock' | 'psychic' | 'ghost' | 'dragon' | 'dark' | 'steel';
	export let attack: number;
	export let defense: number;
	export let src: string;

	const typeStyle: { [key: string]: string } = {
		normal: 'bg-gray-200',
		fire: 'bg-red-500',
		electric: 'bg-yellow-500',
		water: 'bg-blue-500',
		grass: 'bg-green-500',
		poison: 'bg-purple-500',
		flying: 'bg-sky-500',
		bug: 'bg-amber-500',
		fighting: 'bg-red-500',
		ground: 'bg-gray-500',
		rock: 'bg-gray-500',
		psychic: 'bg-purple-500',
		ghost: 'bg-gray-500',
		dragon: 'bg-purple-500',
		dark: 'bg-gray-500',
		steel: 'bg-gray-500'
	};

	const computedType = typeStyle[type];


</script>

<a href={`/pokedex/${name}`}>
	<div class="flex gap-2 border-gray-200 border w-fit rounded-lg">
		<div class="p-2 flex flex-col justify-between items-center">
			<h2 class="text-gray-950 font-bold">
				{name}
			</h2>
			<div class="flex gap-1 items-center justify-center">
				<div class="rounded-full  border-4 border-gray-950 w-10 h-10 flex justify-center items-center ">
					<span class="p-1">{attack}</span>
				</div>
				<div class="rounded-full  border-4 border-gray-950 w-10 h-10 flex justify-center items-center ">
					<span class="p-1">{defense}</span>
				</div>
			</div>
			<div class={`${computedType} rounded-full px-2 py-1`}>
				{type}
			</div>
		</div>
		<div class={`${computedType} w-52 flex justify-center items-center rounded-r-lg`}>
			<img {src} alt={name} class="w-32 h-32 object-contain " />
		</div>
	</div>
</a>