<script>
	import './styles.css';
</script>

<div class="app min-h-dvh">
	<main>
		<slot />
	</main>

	<div class="absolute bottom-0 flex flex-row p-4 justify-center w-full items-center gap-4">
		<nav>
			<ul class="flex flex-row">
				<li>
					<a href="/" class="btn btn-active btn-neutral">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li>
					<a href="/" class="btn btn-active btn-neutral">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li>
					<a href="/" class="btn btn-active btn-neutral">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li>
					<a href="/" class="btn btn-active btn-neutral">
						<i class="fa-solid fa-house"></i>
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
