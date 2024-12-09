<script lang="ts">


	let { name, type, attack, defense, src } = $props();

	const typeConfig: { [key: string]: { bg: string; border: string; text: string; icon: string } } = {
		normal: {
			bg: 'bg-slate-100',
			border: 'border-slate-200',
			text: 'text-slate-700',
			icon: '⭐'
		},
		fire: {
			bg: 'bg-red-50',
			border: 'border-red-200',
			text: 'text-red-700',
			icon: '🔥'
		},
		electric: {
			bg: 'bg-yellow-50',
			border: 'border-yellow-200',
			text: 'text-yellow-700',
			icon: '⚡'
		},
		water: {
			bg: 'bg-blue-50',
			border: 'border-blue-200',
			text: 'text-blue-700',
			icon: '💧'
		},
		grass: {
			bg: 'bg-green-50',
			border: 'border-green-200',
			text: 'text-green-700',
			icon: '🌿'
		},
		poison: {
			bg: 'bg-purple-50',
			border: 'border-purple-200',
			text: 'text-purple-700',
			icon: '☠️'
		},
		flying: {
			bg: 'bg-sky-50',
			border: 'border-sky-200',
			text: 'text-sky-700',
			icon: '🦅'
		},
		bug: {
			bg: 'bg-amber-50',
			border: 'border-amber-200',
			text: 'text-amber-700',
			icon: '🐛'
		},
		fighting: {
			bg: 'bg-red-50',
			border: 'border-red-200',
			text: 'text-red-700',
			icon: '👊'
		},
		ground: {
			bg: 'bg-orange-50',
			border: 'border-orange-200',
			text: 'text-orange-700',
			icon: '🌍'
		},
		rock: {
			bg: 'bg-stone-50',
			border: 'border-stone-200',
			text: 'text-stone-700',
			icon: '🪨'
		},
		psychic: {
			bg: 'bg-fuchsia-50',
			border: 'border-fuchsia-200',
			text: 'text-fuchsia-700',
			icon: '🔮'
		},
		ghost: {
			bg: 'bg-indigo-50',
			border: 'border-indigo-200',
			text: 'text-indigo-700',
			icon: '👻'
		},
		dragon: {
			bg: 'bg-violet-50',
			border: 'border-violet-200',
			text: 'text-violet-700',
			icon: '🐉'
		},
		dark: {
			bg: 'bg-zinc-50',
			border: 'border-zinc-200',
			text: 'text-zinc-700',
			icon: '🌑'
		},
		steel: {
			bg: 'bg-gray-50',
			border: 'border-gray-200',
			text: 'text-gray-700',
			icon: '⚔️'
		}
	};

	const currentType = typeConfig[type];
</script>

<a
	href={`/pokedex/${name}`}
	class="block transition-transform hover:scale-105 duration-300"
>
	<div class="relative flex bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
		<!-- Info Section -->
		<div class="p-4 flex flex-col justify-between min-w-[140px]">
			<div class="space-y-3">
				<!-- Name -->
				<h2 class="text-lg font-bold text-gray-900 truncate">
					{name}
				</h2>

				<!-- Type Badge -->
				<div class={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${currentType.text} ${currentType.bg} ${currentType.border} border`}>
					<span>{currentType.icon}</span>
					<span class="capitalize">{type}</span>
				</div>
			</div>

			<!-- Stats -->
			<div class="flex gap-2 mt-4">
				<div class="flex flex-col items-center">
					<div class={`w-12 h-12 rounded-full border-2 ${currentType.border} flex items-center justify-center bg-white`}>
						<span class="font-bold text-gray-700">{attack}</span>
					</div>
					<span class="text-xs text-gray-500 mt-1">Attack</span>
				</div>
				<div class="flex flex-col items-center">
					<div class={`w-12 h-12 rounded-full border-2 ${currentType.border} flex items-center justify-center bg-white`}>
						<span class="font-bold text-gray-700">{defense}</span>
					</div>
					<span class="text-xs text-gray-500 mt-1">Defense</span>
				</div>
			</div>
		</div>

		<!-- Image Section -->
		<div class={`relative w-48 ${currentType.bg} flex items-center justify-center p-4`}>
			<div class="absolute inset-0 opacity-50 bg-gradient-to-br from-white/80"> </div>
			<img
				{src}
				alt={name}
				class="w-32 h-32 object-contain relative z-10 drop-shadow-xl hover:scale-110 transition-transform duration-300"
			/>
		</div>
	</div>
</a>