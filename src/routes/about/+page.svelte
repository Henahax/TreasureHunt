<script lang="ts">
	import PageContainer from '$lib/PageContainer.svelte';
	import { navStore } from '$lib/store';

	$navStore = 'about';
</script>

<PageContainer>
	<div>About</div>
</PageContainer>
