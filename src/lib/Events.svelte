<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
</script>

<div class="card p-4 flex flex-col gap-4">
	<h2 class="h3">Select task</h2>
	<nav class="list-nav">
		<ul>
			<li>
				<a href="/">
					<span class="badge bg-primary-500">Introduction</span>
					<span class="flex-auto">Start the treasure hunt</span>
				</a>
			</li>
			<li>
				<a href="/">
					<span class="badge bg-primary-500">Task 1</span>
					<span class="flex-auto">Find the hidden message</span>
				</a>
			</li>
			<li>
				<a href="/">
					<span class="badge bg-primary-500">Task 2</span>
					<span class="flex-auto">Get toe the bus stop</span>
				</a>
			</li>
		</ul>
	</nav>
</div>
