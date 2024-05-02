<script>
	import Heading from '$lib/heading.svelte';
	import { navStore } from './store';

	$navStore = 'home';
</script>

<Heading title="Welcome!" />
<section class="flex flex-col gap-2">
	<div>Featured Treasure Hunts:</div>
	<div class="carousel carousel-center h-32 w-full space-x-4">
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
				class="rounded-box"
				alt=""
			/>
		</div>
	</div>
</section>

<style>
</style>
