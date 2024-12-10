<script lang="ts">

	interface Data {
		typeDetail: string;
		detail: string;
	}

	const { typeDetail, detail }: Data = $props();

</script>

<li class="text-gray-700">
	<span class="font-medium">{typeDetail}:</span> {detail}
</li>