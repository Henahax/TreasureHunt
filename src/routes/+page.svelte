<script lang="ts">
	import { getString, language } from '../lib/dictionary.ts';

	let test = getString('close', language.de);
</script>

<h2 class="h2">Info</h2>
<p>verify your path</p>
<div>{test}</div>
