<script lang="ts">
import Heading from '$lib/heading.svelte';
	import { navStore } from '../store';

	$navStore = "about";
</script>

<Heading title="About" />


<md-block>
	# Heading
	Some *embedded* Markdown which `md-block` can convert for you!
</md-block>