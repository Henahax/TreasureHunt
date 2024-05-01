<script>
	import './styles.css';
</script>

<div class="app min-h-dvh">
	<main>
		<slot />
	</main>

	<div class="absolute bottom-0 flex w-full flex-row items-center justify-center gap-4 p-4">
		<nav class="rounded-full bg-white bg-opacity-5 px-4">
			<ul class="flex flex-row">
				<li>
					<a href="/" class="btn btn-ghost">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li>
					<a href="/" class="btn btn-ghost">
						<i class="fa-solid fa-list-ul"></i>
					</a>
				</li>
				<li>
					<a href="/" class="btn btn-ghost">
						<i class="fa-solid fa-question"></i>
					</a>
				</li>
			</ul>
		</nav>

		<button class="btn btn-circle btn-primary btn-lg text-2xl">
			<i class="fa-solid fa-key"></i>
		</button>
	</div>
</div>

<style>
</style>
