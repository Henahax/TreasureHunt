<script>
	import './styles.css';
</script>

<div class="app mx-auto flex max-w-screen-lg flex-col p-4">
	<div class="fixed bottom-4 w-full lg:relative lg:top-0">
		<nav class="mx-auto w-fit rounded-full bg-white bg-opacity-5 px-2">
			<ul class="flex flex-row">
				<li>
					<a href="/" class="btn btn-ghost">
						<i class="fa-solid fa-house"></i>
						<div class="hidden sm:block">Home</div>
					</a>
				</li>
				<li>
					<a href="/event/beta" class="btn btn-ghost">
						<i class="fa-solid fa-list-ul"></i>
						<div class="hidden sm:block">Treasure Hunts</div>
					</a>
				</li>
				<li>
					<a href="/about" class="btn btn-ghost">
						<i class="fa-solid fa-question"></i>
						<div class="hidden sm:block">About</div>
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<main class="w-full">
		<slot />
	</main>
</div>

<style>
</style>
